import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../interfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private http: HttpClient) { }


  getAllStations():Observable<Station[]>{
    return this.http.get<Station[]>(`/station/getStations`)
  }

}
