import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MasterFooterComponent } from 'src/app/core';

@NgModule({
  declarations: [
    AppComponent,
    MasterFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
