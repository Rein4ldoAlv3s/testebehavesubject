import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  message: string = '';

  constructor(private messageService: MessageService){}

  ngOnInit(): void {
    this.messageService.receivedMessage().subscribe((d) => {
      this.message = d;
    })
  }



}
