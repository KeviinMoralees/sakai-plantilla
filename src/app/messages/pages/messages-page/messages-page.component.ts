import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../interfaces/Messages.interface';
import { delay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {


    public messages?: Message[];

    constructor(private messagesServices:MessagesService, private router:Router){}

    ngOnInit(): void {
        this.messagesServices.getAllMessages().
        pipe(
            delay(2000)
        )
        .subscribe( messages => {

            if(!messages) return this.router.navigate([`/dashboard`])
            this.messages = messages;
            return;
        })
    }


}
