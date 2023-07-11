import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { Station } from '../../interfaces/station';

@Component({
  selector: 'stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent implements OnInit{

    public stations!: Station[];

    constructor(private stationsServices: StationsService){

    }

    ngOnInit(): void {
        this.stationsServices.getAllStations().subscribe( stations => {
            this.stations = stations
        })
    }

}
