import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentListComponent } from './src/pages/investment-list/investment-list.component';
import { CustomRansomComponent } from './src/pages/custom-ransom/custom-ransom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { InvestmentsService } from './src/services/investments.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    CustomRansomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [InvestmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
