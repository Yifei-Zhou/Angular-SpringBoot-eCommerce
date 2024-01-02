class Customer {

    public firstName: string;
    public lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let's create an instance
let myCustomer = new Customer("Jimmy", "Choo");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);