import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from 'src/core/models/invoice.model';

@Component({
  selector: 'app-invoices-list-item',
  templateUrl: './invoices-list-item.component.html',
  styleUrls: ['./invoices-list-item.component.scss'],
})
export class InvoicesListItemComponent implements OnInit {
  @Input() invoice?: Invoice;

  constructor() {}

  ngOnInit(): void {}
}
