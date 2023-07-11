import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { MessagesCreatePageComponent } from './pages/messages-create-page/messages-create-page.component';
import { MessagesSeePageComponent } from './pages/messages-see-page/messages-see-page.component';
import { MessagesEditPageComponent } from './pages/messages-edit-page/messages-edit-page.component';

const routes: Routes = [
    {path:'' , component:  MessagesPageComponent},
    {path:'create' , component: MessagesCreatePageComponent},
    {path:'see/:id' , component: MessagesSeePageComponent},
    {path:'edit/:id' , component: MessagesEditPageComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
