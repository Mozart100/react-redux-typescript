import AppBody from "../AppBody";

 export interface RoutElement {
    name: string;
    component: any;
    path:string;
};

export const routeElements: RoutElement[] = [{
    component: AppBody,
    name: AppBody.name,
path:"/"
}]

 export default routeElements;


