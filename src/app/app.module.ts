import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ApiUrlInterceptor } from './api-url.interceptor';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AllTopicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
