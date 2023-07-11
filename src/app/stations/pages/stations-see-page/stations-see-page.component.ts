import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-stations-see-page',
  templateUrl: './stations-see-page.component.html',
  styleUrls: ['./stations-see-page.component.scss']
})
export class StationsSeePageComponent implements OnInit {

    public idStation?: string;

    constructor(private activateRouter: ActivatedRoute){}


    ngOnInit(): void {
        this.activateRouter.params
        .pipe(
           // switchMap({ id }) => this.service.getId(id);
           switchMap( ({ id }) => this.idStation = id),
        ).subscribe( resp => {
            console.log(this.idStation);
        })
    }

}
