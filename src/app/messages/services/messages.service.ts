import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Message } from '../interfaces/Messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

    private baseUrl = '/audio'

  constructor(private http: HttpClient) { }


  getAllMessages():Observable<Message[] | undefined>{
    return this.http.get<Message[]>(`${this.baseUrl}/getAudioMessages`)
    .pipe(
        catchError(error => of(undefined))
    )
  }

  getMessageForId(id:string):Observable<Message | undefined>{
    return this.http.get<Message>(`${this.baseUrl}/getAudioMessageById?id=${id}`)
    .pipe(
        catchError(error => of(undefined)),
    )
  }



}
