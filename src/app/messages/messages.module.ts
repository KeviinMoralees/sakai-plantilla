import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesCreatePageComponent } from './pages/messages-create-page/messages-create-page.component';
import { MessagesEditPageComponent } from './pages/messages-edit-page/messages-edit-page.component';
import { MessagesSeePageComponent } from './pages/messages-see-page/messages-see-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';


@NgModule({
  declarations: [
    MessagesCreatePageComponent,
    MessagesEditPageComponent,
    MessagesSeePageComponent,
    MessagesPageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
