import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
  bootstrap: [AppComponent]
})
export class AppModule { }