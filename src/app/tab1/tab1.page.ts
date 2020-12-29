import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessagingService } from '../Services/messaging.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  message = new BehaviorSubject(null);

  constructor(
    messagingService: MessagingService,
    
  ) {
    const userId = 'leang123';
    messagingService.requestPermission(userId)
    messagingService.receiveMessage();
    this.message = messagingService.currentMessage;
    messagingService.currentMessage.subscribe(data => {
      console.log(data);
    });
    
    // fcmService.afs.collection('devices').get().subscribe(data => {
    //   console.log(data);
    //   window.data = data;
    // });
    // fcmService.afs.collection('devices').snapshotChanges().subscribe(data => {
    //   console.log(data);
    // });
    
  }


}
