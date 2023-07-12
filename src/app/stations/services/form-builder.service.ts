import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  builderFormStation():FormGroup{
    const formStation: FormGroup = this.formBuilder.group({
        name:['', [Validators.required]],
        latitude: [0, [Validators.required]],
        longitude: [0, [Validators.required]],
        observations: [0, [Validators.required]],
        speakerVolume: [0, [Validators.required]],
        telemetryTime: [0, [Validators.required]],
    })

    return formStation
  }
}
