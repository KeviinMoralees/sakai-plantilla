import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-stations-edit-page',
  templateUrl: './stations-edit-page.component.html',
  styleUrls: ['./stations-edit-page.component.scss']
})
export class StationsEditPageComponent implements OnInit {

    public idStation!: string;
    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.activatedRoute.params
        .pipe(
            switchMap( ({id}) => this.idStation = id)
        ).subscribe( resp => {
            console.log(resp);

        })
    }

}
