import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form [formType]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formType: 'add' | 'edit' = 'add';

  constructor() {}

  ngOnInit(): void {}
}
