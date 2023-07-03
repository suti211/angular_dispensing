import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormatWithMeasurementUnitPipe} from './measurement-unit-formatter.pipe';
import {FormatWithSignPipe} from './format-with-sign.pipe';
import {UiModule} from '@angular-dispensing/ui';
import {BusinessModule} from '@angular-dispensing/business';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {BrowserModule} from '@angular/platform-browser';
import {DecimalPipe} from '@angular/common';
import {TableComponent} from './table/table.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormatWithMeasurementUnitPipe,
    FormatWithSignPipe,
    DecimalPipe,
    UiModule,
    BusinessModule,
    BrowserModule,
    TableComponent,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
