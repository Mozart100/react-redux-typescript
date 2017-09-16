import { Action } from "redux";

import { Widget } from "../Models/Widget";

declare var fetch;

export interface WidgetAction extends Action {
	widgets: Widget[];
}
