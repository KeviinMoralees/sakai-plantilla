import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-station-see-edit',
  templateUrl: './form-station-see-edit.component.html',
  styleUrls: ['./form-station-see-edit.component.scss']
})
export class FormStationSeeEditComponent implements OnInit {



    public formStation: FormGroup = this.formBuilder.group({
       name:['', [Validators.required]],
       latitud: [0, [Validators.required]],
       longitud: [0, [Validators.required]],
       observacion: [0, [Validators.required]],
       volumen: [0, [Validators.required]],
       tiempoTelemetria: [0, [Validators.required]],
    })

    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {

    }

    onSend():void{
        console.log(this.formStation.value);
    }
}
