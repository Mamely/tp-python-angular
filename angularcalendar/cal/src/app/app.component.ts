import { Component } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
//import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule height="600" width="1100" [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
//  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cal';
  public setView: View = 'Month';
  public setDate: Date  = new Date(2019, 0, 15);
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: "Meditation time",
      StartTime: new Date(2020,4,17,11,0),
      EndTime: new Date(2020,4,17,12,0)
    }]
  }
}
