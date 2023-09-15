import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.css']
})
export class MassagesComponent {
  constructor(public messageService: MessageService) {}
}
