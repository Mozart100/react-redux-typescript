import * as React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { appStore } from "../../redux/app-store";


const App = () => (
    <h1>yyyxxxxyyyLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in eaque dicta reiciendis illum error sequi rem deserunt eligendi beatae.</h1>
);



render(
<Provider store={appStore}>
    <App />
</Provider>, document.getElementById("root"));



