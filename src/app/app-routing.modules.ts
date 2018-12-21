import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { GetcontactComponent } from "./getcontact/getcontact.component";
import { ContactService } from "./contact.service";
import { ContactdetailComponent } from "./contactdetail/contactdetail.component";
import { SendsmsComponent } from "./sendsms/sendsms.component";


const appRoute:Routes = [
    { path : '' , redirectTo :'/contacts',pathMatch:'full' },
    { path : 'contacts' , component: GetcontactComponent , children:[

        
    ] },
    { path: 'add' , component:ContactdetailComponent},
    { path: 'contacts/sendsms' , component:SendsmsComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]
    })

export class AppRoutingModule{

}