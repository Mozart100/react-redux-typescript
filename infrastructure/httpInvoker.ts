
import axios, { AxiosResponse } from "axios";

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------


type validCallbackDelegate<T> = (items: T[]) => void;

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------

export class ExperemntalInvoker<TObject> 
{

  constructor(private url:string) {
    
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------
  
  
  
}

export default class AxiousInvoker<TObject>
{

  constructor(private url: string, private validCallback: validCallbackDelegate<TObject>) {
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


  public getAxiouseRequestt = (): void => {
    const innerCallback = this.convertData;
    const outerCallback = this.validCallback;

    axios.get(this.url)
      .then((response: AxiosResponse) => { this.validCallback(this.convertData(response.data)) });
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

