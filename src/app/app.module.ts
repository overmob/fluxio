import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
