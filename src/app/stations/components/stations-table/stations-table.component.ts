import { Component, Input} from '@angular/core';
import { Station } from '../../interfaces/station';

@Component({
  selector: 'stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent{

    @Input()
    public stations!: Station[];



}
