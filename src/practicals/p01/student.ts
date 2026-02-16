export class Student {
    firstname: string = ""
    lastname: string = ""

    printName(){
        return this.firstname.concat(this.lastname);
    }
}
