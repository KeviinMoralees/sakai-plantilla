import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-messages-edit-page',
  templateUrl: './messages-edit-page.component.html',
  styleUrls: ['./messages-edit-page.component.scss']
})
export class MessagesEditPageComponent implements OnInit {


    public idAudio!: string;

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap(({id}) => this.idAudio = id)
        ).subscribe()
    }

}
