import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentListComponent } from './src/pages/investment-list/investment-list.component';
import { CustomRansomComponent } from './src/pages/custom-ransom/custom-ransom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { InvestmentsService } from './src/services/investments.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { investmentReducer } from './src/store/reducers/investmentReducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatInputModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule, //formularios reativos,
    StoreModule.forRoot({
      investment: investmentReducer
      })
  ],
  providers: [InvestmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
