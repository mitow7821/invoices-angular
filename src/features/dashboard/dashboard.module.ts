import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { InvoicesListItemComponent } from './components/invoices-list-item/invoices-list-item.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InvoicesListItemComponent,
    InvoicesListComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
