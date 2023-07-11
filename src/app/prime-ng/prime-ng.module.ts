import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
