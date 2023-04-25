import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentListComponent } from './src/pages/investment-list/investment-list.component';
import { CustomRansomComponent } from './src/pages/custom-ransom/custom-ransom.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    CustomRansomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
