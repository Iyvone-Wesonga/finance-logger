//implementing an inteface

import{ HasFormatter} from '../interfaces/hasformatter.js' //the two dots show the nesting of the interfaces folder

export class Payment implements HasFormatter {
    readonly recipient:string;
    private details:string;
  public amount:number;
   
   //structure of the invoices--property instance
   constructor(c:string, d:string, a:number){
       this.recipient=c;
       this.details=d;
       this.amount=a;
   }

   //method instance
   //this format follows the inetrface of hasformatter
   format(){
       return`This ${this.recipient} owed you ${this.amount} for ${this.details}`
   }
}