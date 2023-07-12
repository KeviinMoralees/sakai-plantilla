import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  exports: [
    TableModule,
    ButtonModule,
    ProgressSpinnerModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
