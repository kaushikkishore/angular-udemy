import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WarningAlert } from "./warning-alert/waring-alert.component";
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertDangerComponent } from './alert-danger/alert-danger.component';
import { AlertInfoComponent } from './alert-info/alert-info.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [AppComponent, WarningAlert, AlertSuccessComponent, AlertDangerComponent, AlertInfoComponent, AlertsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
