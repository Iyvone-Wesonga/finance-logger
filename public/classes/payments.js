//implementing,an inteface
export class Payment {
    //structure of the invoices--property instance
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    //method instance
    //this format follows the inetrface of hasformatter
    format() {
        return `You owe ${this.recipient} ${this.amount} for ${this.details}`;
    }
}
