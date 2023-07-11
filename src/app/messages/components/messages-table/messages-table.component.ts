import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../interfaces/Messages.interface';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'messages-table',
  templateUrl: './messages-table.component.html',
  styleUrls: ['./messages-table.component.scss']
})
export class MessagesTableComponent {

    @Input()
    public messages!: Message[];
    public visible: boolean = false;
    public messageName: string = '';
    public messageDescription: string = '';

    constructor(private router:Router, private messagesService: MessagesService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService){}

    onPlay(idStation: string):void{
        this.messagesService.getMessageForId(idStation).subscribe( message => {
            var audio = new Audio("data:audio/wav;base64,"+ message?.message);
            audio.play();
        })
    }

    onEdit(idMessage: string):void{
        this.router.navigate([`/messages/edit/${idMessage}`])
    }

    onDelete(idMessage: string):void{
        this.confirmationService.confirm({
            message: 'Seguro que deseas borrar este Audio?',
            header: 'Borrar Audio',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Audio eliminado' })
            },
            reject: (type : ConfirmEventType) => {
              switch(type){
               case ConfirmEventType.REJECT:
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cancelaste, no se elimino' });
                break;
                case ConfirmEventType.CANCEL:
                this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Cancelaste la eliminacion' });
                break;
              }
            }
        })
    }

    showDialogOInfo(messageName: string, messageDescription: string):void {
        this.messageName = `Descripcion ${messageName}`;
        this.messageDescription = `${messageDescription}`;

        this.visible = true
    }

}
