import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from '../../services/messages.service';
import { HttpErrorResponse } from '@angular/common/http';



interface UploadEvent {
    originalEvent: Event;
    files: File[];
}


@Component({
    selector: 'form-messages',
    templateUrl: './form-messages.component.html',
    styleUrls: ['./form-messages.component.scss']
})
export class FormMessagesComponent implements OnInit {


    @Input()
    public formMessages: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
    })

    @Input()
    public method!: string;
    public files!: File[];

    constructor(private formBuilder: FormBuilder, private router: Router, private messagesService: MessagesService) { }

    ngOnInit(): void { }

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

        console.log(`EDITAR `, this.formMessages.value);
        return;
    }

    onBack() {
        this.router.navigate([`/messages`])
    }

}
