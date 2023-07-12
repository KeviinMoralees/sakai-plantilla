import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderMessagesService {

    constructor(private formBuilder: FormBuilder) { }

  builderFormMessage():FormGroup{
    const formMessages: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required,Validators.minLength(4)]],
        description: ['', [Validators.required,Validators.minLength(8)]],
    })

    return formMessages
  }
}
