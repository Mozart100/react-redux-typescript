import MainContent from "../MainContent";

export interface RoutElement {
    name: string;
    component: any;
    path: string;
};

export const routeElements: RoutElement[] = [{
    component: MainContent,
    name: MainContent.name,
    path: "/"
}]

export default routeElements;


