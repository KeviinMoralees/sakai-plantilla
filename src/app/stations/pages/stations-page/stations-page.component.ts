import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../interfaces/station';
import { delay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stations-page',
  templateUrl: './stations-page.component.html',
  styleUrls: ['./stations-page.component.scss']
})
export class StationsPageComponent implements OnInit {

    public stations?: Station[];

    constructor(private stationsServices: StationsService, private router: Router){}

    ngOnInit(): void {
        this.stationsServices.getAllStations()
        .pipe(
            delay(2000)
        )
        .subscribe( stations => {
            if(!stations) return this.router.navigate([`/dashboard`])

            this.stations = stations
            return;
        })
    }

}
