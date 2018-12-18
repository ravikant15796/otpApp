export class Contact{
    public _id?:string;
    public firstName:string;
    public lastName : string;
    public phoneNumber:number;
    public message =[]

   constructor(fn , ln , phn){
    this.firstName = fn;
    this.lastName = ln ;
    this.phoneNumber = phn;
    
    this.message = []
   }
}