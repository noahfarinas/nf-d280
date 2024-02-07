import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Declare your components here
  imports: [BrowserModule],
  bootstrap: [AppComponent], // Specify the component to bootstrap
})
export class AppModule { }
