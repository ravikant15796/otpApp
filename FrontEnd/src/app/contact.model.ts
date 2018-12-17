export class Contact{
    _id?:string;
    public firstName:string;
    public lastName : string;
    public phoneNumber:number

   constructor(fn , ln , phn){
    this.firstName = fn;
    this.lastName = ln ;
    this.phoneNumber = phn
   }
}