export class ListTemplate {
    constructor(container) {
        this.container = container;
    } //structrure instance
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format(); //adding the format calls the hasformatter interface
        li.append(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    } //method instance{allows both renering of invoice and payemnts as they contain the hasformatter interface}
}
