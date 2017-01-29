import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems:any = [{
    "path": "tab1",
    "icon": "fa-exclamation-triangle",
    "eventName": "firstItem",
    "label": "Alerts",
    "subitems": [{"label": "Sub Category 1"}, {
      "label": "Sub Category 2",
      "eventName": "subitemTwo"
    }, {"label": "Sub Category 3", "path": "subitem3"}]
  }, {
    "path": "tab2",
    "icon": "fa-briefcase",
    "label": "Cases",
    "subitems": [{"label": "Sub Category 1"}, {"label": "Sub Category 2"}, {"label": "Sub Category 3"}]
  }, {"path": "tab3", "icon": "fa-bar-chart", "label": "Analysis"}, {
    "path": "tab4",
    "icon": "fa-tachometer",
    "label": "Dashboards"
  }];
}
