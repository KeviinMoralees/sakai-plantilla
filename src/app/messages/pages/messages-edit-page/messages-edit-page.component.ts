import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-messages-edit-page',
  templateUrl: './messages-edit-page.component.html',
  styleUrls: ['./messages-edit-page.component.scss']
})
export class MessagesEditPageComponent implements OnInit {


    public idAudio!: string;
    public formMessage: FormGroup = this.formBuilder.group({
        name:['', [Validators.required]],
        description: ['', [Validators.required]],
    })


    constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap(({id}) => this.idAudio = id)
        ).subscribe()
    }

}
