import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/core/models/invoice.model';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
})
export class InvoicesListComponent implements OnInit {
  invoices: Invoice[] = [];
  constructor() {}

  ngOnInit(): void {}
}
