import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent} from './custyomers-list.component/customers-list.component';
import { FilterTextboxComponent } from './custyomers-list.component/filtered-textbox.component';


@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [ CommonModule ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }