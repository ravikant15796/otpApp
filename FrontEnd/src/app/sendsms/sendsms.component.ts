import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.css']
})
export class SendsmsComponent implements OnInit {

  constructor(private service : ContactService) { }

  ngOnInit() {
    
  }

  // sendSms(id){
  //   this.service.sendSms(id);
  // }

}
