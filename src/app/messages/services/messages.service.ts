import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/Messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }


  getAllMessages():Observable<Message[]>{
    return this.http.get<Message[]>(`/audio/getAudioMessages`)
  }
}
