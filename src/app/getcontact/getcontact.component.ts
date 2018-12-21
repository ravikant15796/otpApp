import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-getcontact',
  templateUrl: './getcontact.component.html',
  styleUrls: ['./getcontact.component.css']
})
export class GetcontactComponent implements OnInit {
  contact : Contact;
  selectedCont = Contact;
  private subscribe : Subscription;
  constructor(private contactService : ContactService) { }
  public select = false;
  ngOnInit() {
    this.contactService.getContacts().subscribe((contact:Contact)=>{
      this.contact = contact
    })
    
  }

  details(i,j){
    this.select = true;
  this.selectedCont = i ;
  }
  smsSend(){
    this.contactService.sendSms(this.selectedCont['_id']).subscribe();
    this.ngOnInit();
  }
}
