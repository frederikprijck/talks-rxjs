import { Guid } from '../shared/guid'

export class Person {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    country: string;

    constructor(firstName:string, lastName:string, email:string, phoneNumber:number, country: string) {
        this.id = Guid.newGuid();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.country = country;
    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

