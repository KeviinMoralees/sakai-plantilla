import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../interfaces/Messages.interface';

@Component({
  selector: 'messages-table',
  templateUrl: './messages-table.component.html',
  styleUrls: ['./messages-table.component.scss']
})
export class MessagesTableComponent implements OnInit {

    public messages!: Message[];

    constructor(private messagesServices:MessagesService){}

    ngOnInit(): void {
        this.messagesServices.getAllMessages().subscribe( messages => {
            this.messages = messages;
        })
    }

}
