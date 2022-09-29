import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { FormsRoutingModule } from './forms-routing.module';

@NgModule({
  declarations: [AddInvoiceComponent, EditInvoiceComponent],
  imports: [CommonModule, FormsRoutingModule],
})
export class FormsModule {}
