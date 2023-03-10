import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnerWorkComponent } from './partner-work/partner-work.component';
import { TrendingAuctionComponent } from './trending-auction/trending-auction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnerWorkComponent,
    TrendingAuctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
