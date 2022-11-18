//implementing an inteface
export class Invoice {
    //structure of the invoices--property instance
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //method instance
    //this format follows the inetrface of hasformatter
    format() {
        return `This ${this.client} owes you ${this.amount} for ${this.details}`;
    }
}
