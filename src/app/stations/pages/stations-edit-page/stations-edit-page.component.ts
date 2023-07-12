import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StationsService } from '../../services/stations.service';

@Component({
  selector: 'app-stations-edit-page',
  templateUrl: './stations-edit-page.component.html',
  styleUrls: ['./stations-edit-page.component.scss']
})
export class StationsEditPageComponent implements OnInit {


    public idStation!: string;
    public formStation: FormGroup = this.formBuilder.group({
        name:['', [Validators.required]],
        latitud: [0, [Validators.required]],
        longitud: [0, [Validators.required]],
        observacion: [0, [Validators.required]],
        volumen: [0, [Validators.required]],
        tiempoTelemetria: [0, [Validators.required]],
    })

    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private stationsService: StationsService){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap( ({id}) => this.stationsService.getStationById(id))
        ).subscribe( resp => {
            this.formStation.reset({
                name: resp?.name,
                latitud: resp?.latitude,
                longitud: resp?.longitude,
                observacion: resp?.observations,
                volumen: resp?.speakerVolume,
                tiempoTelemetria: resp?.telemetryTime,
            })
        })
    }

}
