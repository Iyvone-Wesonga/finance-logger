//DOM Casting..use the ! to select an element that ts might pass off as null. Otherwise use if....if(anchor){code that calls anchor} 
//there are prexisting type sets...hovering will show the type of tagged dom element. Passing aclass will give a type generlaized data type; element. with quarysekctor of specific element strong types the type to the specific elemnt

const form=document.querySelector(".new-item-form") as HTMLFormElement;     //--alternatively queryselector("form")!
console.log(form.children) ;//all children elements will be consoled

const type=document.querySelector("#type") as HTMLSelectElement;
const tofrom=document.querySelector("#tofrom") as HTMLInputElement;
const details=document.querySelector("#details") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e:Event)=>{
    e.preventDefault()  //the page wont refresh on submission, its a method add the friggin ()

    console.log(
        type.value,
         tofrom.value, 
         details.value,
         amount.valueAsNumber) //the value will be logged as a number
})

//creating invoice object template instances

//class Invoice {
//     readonly client:string;
//     private details:string;
//   public amount:number;
//    
//    //structure of the invoices--property instance
//    constructor(c:string, d:string, a:number){
//        this.client=c;
//        this.details=d;
//        this.amount=a;
//    }
//
//    //method instance
//    format(){
//        return`This ${this.client} owes you ${this.amount} for ${this.details}`
//    }
//}
//CARRIED THE CLASS TO A DIFFERENT MODULE
 
import {Invoice} from './classes/invoice.js'
 


//creating instances of the class
const invOne= new Invoice("Mario", "work on a website", 300)
const invTwo=new Invoice("June", "Discussions", 49)

console.log(invOne)//returns the full object, wicth customized properties
console.log(invTwo)

console.log(invOne.format())//gives the value of the method instance, manipulates the parameters customized for the class object
console.log(invTwo.format())

//creating an invoice array, which Invoice object instances will be pushed into

let invoices:Invoice[]=[] //setting the array as an empty array
invoices.push(invOne, invTwo)  //nothing else can be pushed, only ionstances of the invoice considering the type of the arry specified invoice object type

//editing property values for instances is possible

invOne.amount=200;//changes the amount. to prevent any random changing
console.log(invOne.format())

//PUBLIC, PRIVATE AND READONLY---ACCESS MODIFIERS 
//First, we'll create more instances of the invoice created, rather than invoke the objects and methods independently, use a foreach to loop through invoices array, doing the same action for all the indices(invoices instances)
//the loop gives a name, i.e parameter to the indices of the array, and that parameter.property will seek the specific value
invoices.forEach(inv=>{
    //console.log(inv.client, inv.details, inv.amount, inv.format()) ----will not work as the details have been made private and this is an attempt to modify it. withpdut the inv.details--details are removed 
console.log(inv.client, inv.amount, inv.format()) //writing format withpout the method distinguisher will log the code for format, logging it correctly will write the details and execute the format method
console.log(inv.format());
console.log(inv)
// inv.client="sth else" ---gives an error as the client property has been made to be read only.. the value still reads but cant be modified
})

//Public is the default access modifier..allows all access
//private prevents direct compilation outside the class..the method instrance however can acess it and display if its in the return value
//with access modifiers we can access the properties directly in the constructor

/*class obj{
    constructor(
        private client:type,
        public amount:type,
        readonly details:type
    ){
        this.clientName=client;
        this.moneyAmount=amount;
        this.theirDetails=details
    }
    method instances{}  }

    note that the constructor is taking the parameters directly, and customizing in new instances as above, just with less code
 */
 
    //MODULE SYSTEM
    /*in the tsconfig.json, change the module to ES2016 or ES 2015
    Change the type in the script tag in html to module
    create a different folder in the src file, add a file.ts for whatever that wont be in the main path
    add export before the ts class or anything in other module that you'd like to export
    
    in the original ts file, add import {}from the other folder/file name.js considering the ts will edn up compiling to a js file
    compiles immediately in the outdir..cretaing the .js*/


    //INTERFACES
    /*Allows enforcing of specific ctrsuctures on classes or objects
    works like a class, but is supposed to enofrce a variable in future by the same interface name*/

    interface isPerson{
        name:string,
        age:number;
        speak(a:string):void
        spend(a:number):number
    }

    const me:isPerson={
        name:"Blessed",
        age:18,
        speak(text:string):void{
            console.log(text)},
        spend(amount:number):number{
           console.log(`I spend`, amount)
            return amount
        } //, skills() craetes an error considering the interface specified the structure for the variable

    }
console.log(me)
//benefits of interfaces is it allows reusing the same interface to define the structrue of numerous objects..works like classes
//interfaces enorce a structural rules,a  skeleton. unlike classes which explicitly define objects only

//using interfaces in a function
const greetme=(person:isPerson)=>{
    alert(`${person.name}, heeey its so nice having you. Keep on keeping on`)
}
greetme(me)

//INTERFACES WITH CLASSES
//Create its module