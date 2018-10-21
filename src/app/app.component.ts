import { Component, OnInit } from '@angular/core';

import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
