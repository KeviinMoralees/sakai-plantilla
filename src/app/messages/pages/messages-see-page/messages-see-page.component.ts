import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-messages-see-page',
  templateUrl: './messages-see-page.component.html',
  styleUrls: ['./messages-see-page.component.scss']
})
export class MessagesSeePageComponent implements OnInit {


    public idAudio!: string;

    constructor(private activatedRoute : ActivatedRoute){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap( ({ id }) => this.idAudio = id)
        ).subscribe()
    }

}
