//will render the list to the page (ul list created in html)
//design a list  
//renders the li to the ul container
//parameters in the constructor should fisrt have an accessibility determiner, and type specified
import { HasFormatter } from "../../interfaces/hasformatter"
export class ListTemplate{
   constructor(private container:HTMLUListElement){} //structrure instance
   render(item:HasFormatter, heading:string, pos:"start"|"end"){
       const li=document.createElement("li")  
       
       const h4=document.createElement("h4")
       h4.innerText=heading;
       li.append(h4);

       const p=document.createElement("p")
       p.innerText=item.format(); //adding the format calls the hasformatter interface
       li.append(p);                
    
       if (pos==="start") {
        this.container.prepend(li)
    }    else{
        this.container.append(li)
    }                                            }//method instance{allows both renering of invoice and payemnts as they contain the hasformatter interface}


      
}