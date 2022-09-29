import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from 'src/core/components/navbar/navbar.component';
import { DashboardModule } from 'src/features/dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
