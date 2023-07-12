import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidatorsService } from 'src/app/shared/services/form-validators.service';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-station',
  templateUrl: './form-station.component.html',
  styleUrls: ['./form-station.component.scss']
})
export class FormStationComponent implements OnInit {


    @Input()
    public formStation: FormGroup = this.formBuilderService.builderFormStation()

    @Input()
    public method!: string;
    public isDirty: boolean = false;

    constructor(private router: Router, private formValidatorService:FormValidatorsService, private formBuilderService:FormBuilderService ){}

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
