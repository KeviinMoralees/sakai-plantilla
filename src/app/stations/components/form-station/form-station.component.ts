import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
       observacion: ['', [Validators.required]],
       volumen: [0, [Validators.required]],
       tiempoTelemetria: [0, [Validators.required]],
    })

    @Input()
    public method!: string;

    constructor(private formBuilder: FormBuilder, private router: Router){}

    ngOnInit(): void {}

    onSend():void{
        if(this.method == 'create'){
            console.log(`CREAR ${this.formStation.value}`);
            return;
        }

        console.log(`EDITAR ${this.formStation.value}`);
        return;
    }

    onBack(){
        this.router.navigate([`/stations`])
    }

}
