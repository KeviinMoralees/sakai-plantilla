import { Component, Input} from '@angular/core';
import { Station } from '../../interfaces/station';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent{

    @Input()
    public stations!: Station[];
    public visible: boolean = false;
    public stationName: string = '';
    public stationObservation: string = '';


    constructor(private router:Router,
        private confirmationService: ConfirmationService,
         private messageService: MessageService
         ){}

    onEdit(idStation: string):void{
        this.router.navigate([`/stations/edit/${idStation}`])
    }

    onSee(idStation: string):void{
        this.router.navigate([`/stations/see/${idStation}`])
    }

    onDelete(idStation: string):void{
        // p-toast
        this.confirmationService.confirm({
            message: 'Seguro que deseas borrar esta estacion?',
            header: 'Borrar Estacion',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.messageService.add({ severity: 'success', summary: 'Confirmado', detail: 'Estacion eliminada' })
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

    
    showDialogOInfo(stationName: string, stationObservation: string):void {
        this.stationName = `Observacion ${stationName}`;
        this.stationObservation = `${stationObservation}`;
        this.visible = true
    }

}
