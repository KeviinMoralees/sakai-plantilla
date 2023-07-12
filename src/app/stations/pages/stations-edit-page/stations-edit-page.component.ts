import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StationsService } from '../../services/stations.service';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'app-stations-edit-page',
  templateUrl: './stations-edit-page.component.html',
  styleUrls: ['./stations-edit-page.component.scss']
})
export class StationsEditPageComponent implements OnInit {


    public idStation!: string;
    public formStation: FormGroup = this.formBuilderService.builderFormStation()

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private stationsService: StationsService, private formBuilderService: FormBuilderService){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap( ({id}) => this.stationsService.getStationById(id))
        ).subscribe( resp => {

            // TODO: Si los campos tienen el mismo nombre se settean solos con el reset()
            // this.formStation.reset({
            //     name: resp?.name,
            //     latitud: resp?.latitude,
            //     longitud: resp?.longitude,
            //     observacion: resp?.observations,
            //     volumen: resp?.speakerVolume,
            //     tiempoTelemetria: resp?.telemetryTime,
            // })
            this.formStation.reset(resp)
        })
    }

}
