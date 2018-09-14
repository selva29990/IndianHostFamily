export class User{
    firstName: String;
    lastName: string;
    photoUrl: string;

    constructor({firstName, lastName, photoUrl}){
        this.firstName = firstName
        this.lastName = lastName
        this.photoUrl = photoUrl
    }
}