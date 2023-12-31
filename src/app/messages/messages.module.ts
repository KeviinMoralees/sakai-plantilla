import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesCreatePageComponent } from './pages/messages-create-page/messages-create-page.component';
import { MessagesEditPageComponent } from './pages/messages-edit-page/messages-edit-page.component';
import { MessagesSeePageComponent } from './pages/messages-see-page/messages-see-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MessagesTableComponent } from './components/messages-table/messages-table.component';
import { FormMessagesComponent } from './components/form-messages/form-messages.component';



@NgModule({
  declarations: [
    MessagesCreatePageComponent,
    MessagesEditPageComponent,
    MessagesSeePageComponent,
    MessagesPageComponent,
    MessagesTableComponent,
    FormMessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class MessagesModule { }
