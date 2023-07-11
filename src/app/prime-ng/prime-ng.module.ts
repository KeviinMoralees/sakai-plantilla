import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  exports: [
    TableModule,
    ButtonModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
