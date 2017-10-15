
import axios, { AxiosResponse } from "axios";

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


type validCallbackDelegate<T> = (items: T[]) => void;
type invalidCallbackDelegate = (message: string) => void;

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


export default class AxiousInvoker<TObject>
{
  private invalidMoqCallback;

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------


  constructor(private url: string,
    private validCallback: validCallbackDelegate<TObject>,
    errorCallback?: invalidCallbackDelegate) {

    const moqCallback: invalidCallbackDelegate = (msg: string) => { };
    this.invalidMoqCallback = errorCallback || moqCallback;

  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------


  // public getRequest = (): Promise<TObject[]> => {
  //   return fetch(this.url).then((response: Response) => response.json());
  // }

  // public getAxiouseRequest = (): Promise<TObject[]> => {
  //   const callback = this.constData;
  //   return axios.get(this.url).then((response: AxiosResponse) => callback(response.data));
  // }


  public getAxiouseRequest = (): void => {

    axios.get(this.url)
      .then((response: AxiosResponse) => { this.validCallback( response.data as TObject [] ) })
      .catch(error => this.invalidMoqCallback(error));
      
      // .then((response: AxiosResponse) => { this.validCallback(this.convertData(response.data)) });
  }


  private convertData = (data: object[]): TObject[] => {
    let users: TObject[] = [];

    for (const item of data) {
      // Object.keys(item).forEach
      let json = JSON.stringify(item);
      users.push({ ...JSON.parse(json) });
    }

    return users;
  }



}

function httpInvoker<T>(url: string): Promise<T[]> {

  return fetch(url).then((response: Response) => response.json());

}

