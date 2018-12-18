import { Component, OnInit,ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import {Form, NgForm} from '@angular/forms';



@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  @ViewChild('f') slForm : NgForm;
 constructor(private contactService : ContactService) { }
  ngOnInit() {
   
    }
    onSubmit(form:NgForm){
      const value = form.value;
      const newContact =  new Contact(value.firstName , value.lastName , value.phoneNumber);
      this.contactService.addContact(newContact).subscribe();
      location.reload();
    } 
}
