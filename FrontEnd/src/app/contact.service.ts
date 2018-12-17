import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';
 import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
     selectedContact : Contact;
     index : number;
     container = [];
     
    constructor(private http : Http) { }
     getContacts(){
      return this.http.get("http://localhost:4000/contacts").pipe(map(res =>res.json()));
  }
  addContact(newContact : Contact){
    return this.http.post("http://localhost:4000/addcontact" , newContact).pipe(map(res=>res.json()));

  }   
   getDetails(selected , index){
     this.selectedContact = selected,
     this.index = index
     this.container.push(this.selectedContact);
   }
    
    getSelectedContact(){
     console.log(typeof(this.container[0]));
    }
   

}
