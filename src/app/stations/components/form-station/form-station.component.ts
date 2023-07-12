import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-station',
  templateUrl: './form-station.component.html',
  styleUrls: ['./form-station.component.scss']
})
export class FormStationComponent implements OnInit {


    @Input()
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
