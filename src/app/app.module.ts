import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ApiUrlInterceptor } from './api-url.interceptor';
import { AllTopicsComponent } from './all-topics/all-topics.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './app.service';
import { BannedTopicsComponent } from './banned-topics/banned-topics.component';
import { TextBannedCountComponent } from './text-banned-count/text-banned-count.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTopicsComponent,
    BannedTopicsComponent,
    TextBannedCountComponent
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
