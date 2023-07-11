import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationsPageComponent } from './pages/stations-page/stations-page.component';
import { StationsSeePageComponent } from './pages/stations-see-page/stations-see-page.component';
import { StationsEditPageComponent } from './pages/stations-edit-page/stations-edit-page.component';
import { StationsCreatePageComponent } from './pages/stations-create-page/stations-create-page.component';

const routes: Routes = [
    {path:'' , component: StationsPageComponent},
    {path:'create' , component: StationsCreatePageComponent},
    {path:'see/:id' , component: StationsSeePageComponent},
    {path:'edit/:id' , component: StationsEditPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationsRoutingModule { }
