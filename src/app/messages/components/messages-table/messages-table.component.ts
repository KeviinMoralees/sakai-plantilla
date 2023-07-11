import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../interfaces/Messages.interface';

@Component({
  selector: 'messages-table',
  templateUrl: './messages-table.component.html',
  styleUrls: ['./messages-table.component.scss']
})
export class MessagesTableComponent {

    @Input()
    public messages!: Message[];

}
