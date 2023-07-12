import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsService {

    isValidField(form: FormGroup, field: string): boolean | null {
        return form.controls[field].errors && form.controls[field].touched;
    }

    getFieldError(form: FormGroup, field: string): string | null{
        if(!form.controls[field]) return null
        const errors = form.controls[field].errors || {}

        for(const key of Object.keys(errors)){
            console.log(key);

            switch(key){
                case 'required':
                    return 'Este campo es requerido'

               case 'minlength':
                    return `Minimo ${ errors['minlength'].requiredLength } caracteres `
            }
        }
        return null
    }

}
