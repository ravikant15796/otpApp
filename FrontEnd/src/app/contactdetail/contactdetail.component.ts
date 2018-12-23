import { Component, OnInit,ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import {Form, NgForm, Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';



@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})

export class ContactdetailComponent implements OnInit {
  //@ViewChild('f') slForm : NgForm;
  registerForm: FormGroup;
    submitted = false;
 constructor(private contactService : ContactService,private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName : new FormControl('', Validators.compose([
        Validators.required,
       // Validators.pattern('^[a-z\s]+$')
       
      ])),
       phone : new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'),
       
      ])),
  });

 
    }
    // onSubmit(form:NgForm){
    //   const value = form.value;
    //   const newContact =  new Contact(value.firstName , value.lastName , value.phoneNumber);
    //   this.contactService.addContact(newContact).subscribe();
    //   location.reload();
    // } 

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          return;
        }
      var newContact =  new Contact(this.registerForm.value.firstName,this.registerForm.value.lastName,this.registerForm.value.phone);
      
        this.contactService.addContact(newContact).subscribe();
        location.reload();
      }
}
