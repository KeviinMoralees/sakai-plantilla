import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidatorsService } from 'src/app/shared/services/form-validators.service';

@Component({
  selector: 'form-station',
  templateUrl: './form-station.component.html',
  styleUrls: ['./form-station.component.scss']
})
export class FormStationComponent implements OnInit {


    @Input()
    public formStation: FormGroup = this.formBuilder.group({
       name:['', [Validators.required,Validators.minLength(5)]],
       latitud: [0, [Validators.required]],
       longitud: [0, [Validators.required]],
       observacion: ['', [Validators.required]],
       volumen: [0, [Validators.required]],
       tiempoTelemetria: [0, [Validators.required]],
    })

    @Input()
    public method!: string;
    public isDirty: boolean = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private formValidatorService:FormValidatorsService){}

    isValidField( field : string){
        return this.formValidatorService.isValidField(this.formStation, field)
    }

    getFieldError(field: string): string | null{
        return this.formValidatorService.getFieldError(this.formStation,field)
    }


    ngOnInit(): void {}

    onSend():void{

        if(this.formStation.invalid){
            console.log('invalido');
            console.log(this.formStation.controls['latitud'].errors);
            this.isDirty = true;
            this.formStation.markAllAsTouched();
            return
        }

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
