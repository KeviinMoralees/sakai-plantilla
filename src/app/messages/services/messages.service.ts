import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Message } from '../interfaces/Messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }


  getAllMessages():Observable<Message[] | undefined>{
    return this.http.get<Message[]>(`/audio/getAudioMessages`)
    .pipe(
        catchError(error => of(undefined))
    )
  }



}
