import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationsRoutingModule } from './stations-routing.module';
import { StationsPageComponent } from './pages/stations-page/stations-page.component';
import { StationsSeePageComponent } from './pages/stations-see-page/stations-see-page.component';
import { StationsEditPageComponent } from './pages/stations-edit-page/stations-edit-page.component';
import { StationsCreatePageComponent } from './pages/stations-create-page/stations-create-page.component';
import { StationsTableComponent } from './components/stations-table/stations-table.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormStationComponent } from './components/form-station/form-station.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StationsPageComponent,
    StationsSeePageComponent,
    StationsEditPageComponent,
    StationsCreatePageComponent,
    StationsTableComponent,
    FormStationComponent

  ],
  imports: [
    CommonModule,
    StationsRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class StationsModule { }
