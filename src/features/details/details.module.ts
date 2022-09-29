import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule, FormModule],
})
export class DetailsModule {}
