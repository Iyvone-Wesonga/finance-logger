//implementing an inteface

import{ HasFormatter} from '../interfaces/hasformatter.js' //the two dots show the nesting of the interfaces folder

export class Invoice implements HasFormatter {
    readonly client:string;
    private details:string;
  public amount:number;
   
   //structure of the invoices--property instance
   constructor(c:string, d:string, a:number){
       this.client=c;
       this.details=d;
       this.amount=a;
   }

   //method instance
   //this format follows the inetrface of hasformatter
   format(){
       return`${this.client} owes you ${this.amount} for ${this.details}`
   }
}