import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { MessagesService } from '../../services/messages.service';

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


    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private messagesService: MessagesService
    ){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            tap(({id}) => this.idAudio = id ),
            switchMap(({id}) => this.messagesService.getMessageForId(id)),
        ).subscribe( audio => {
            this.formMessage.reset({
                name: audio?.name,
                description: audio?.description
            })
        })
    }

}
