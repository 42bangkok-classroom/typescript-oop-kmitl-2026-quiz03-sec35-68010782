export class Student {
    firstname: string = ''
    lastname: string = ''

    printName(){
        let fullname: string = this.firstname.concat(' ');
        return fullname.concat(this.lastname);
    
    }
}
