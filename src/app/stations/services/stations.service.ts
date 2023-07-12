import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Station } from '../interfaces/station';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

    private baseUrl = '/station'

    constructor(private http: HttpClient) { }


    // Manejo error devolviendo undefined en caso de error
    getAllStations():Observable<Station[] | undefined >{
        return this.http.get<Station[]>(`${this.baseUrl}/getStations`)
        .pipe(
            catchError( error => of(undefined))
        )
    }

    getStationById( id: string):Observable<Station| undefined>{
        return this.http.get<Station>(`${this.baseUrl}/getStationById?id=${id}`)
        .pipe(
            catchError( error => of(undefined))
        )
    }



}
