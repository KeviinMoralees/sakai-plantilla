import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../interfaces/Messages.interface';

@Component({
    selector: 'form-messages',
    templateUrl: './form-messages.component.html',
    styleUrls: ['./form-messages.component.scss']
})
export class FormMessagesComponent{


    @Input()
    public formMessages: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
    })

    @Input()
    public method!: string;
    @Input()
    public audioId!: string;
    public files!: File[];

    constructor(private formBuilder: FormBuilder, private router: Router, private messagesService: MessagesService) { }


    get audioMessage(): Message {
        const audioMessage = this.formMessages.value as Message;
        return audioMessage;
      }

    selectedFile(event: any): void {
        this.files = event.target.files;
    }


    onUploadFiles(files: File[], description: string, name: string): void {
        const formData = new FormData();
        for (const file of files) { formData.append('audio', file, file.name) }
        this.messagesService.uploadAudio(formData, name, description).subscribe();
    }

    onSubmit(): void {
        if (this.method == 'create') {
            this.onUploadFiles(this.files,this.formMessages.value['name']+'.'+this.files[0].name.slice(-3),this.formMessages.value['description'])
            return;
        }

        let audio = {
            creationTime: "2022-12-12T05:57:07.792Z",
            description: this.formMessages.value['description'],
            idAudioMessage: this.audioId,
            message: null,
            name: this.formMessages.value['name'],
            updateTime: "2022-12-12T05:57:07.792Z",
          }

        this.messagesService.updateAudioMessage(audio).subscribe(resp => {
            console.log(resp);
        })
        return;
    }

    onBack() {
        this.router.navigate([`/messages`])
    }

}
