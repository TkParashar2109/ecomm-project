import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,SellerAuthComponent,HomeComponent ,AppComponent],
  declarations: [  ],
  bootstrap:    [  ]
})
export class AppModule { }