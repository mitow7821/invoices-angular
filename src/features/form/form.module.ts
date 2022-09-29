import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { FormComponent } from './form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AddInvoiceComponent, EditInvoiceComponent, FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
