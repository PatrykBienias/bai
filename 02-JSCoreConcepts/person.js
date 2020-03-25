class Person {
    constructor(firstname, surname) {
        this.firstname = firstname;
        this.surname = surname;
    }
    name(){
        return `${this.firstname} ${this.surname.toUpperCase}`;
    }
    initials(){
        return `${this.firstname[0].toUpperCase()}.${this.surname[0].toUpperCase()}.`;
    }
}

jn = new Person('Jan','Nowak');
pb = new Person('Patryk','Bienias');

console.log(jn.name());
console.log(jn.initials());
console.log();
console.log(pb.name());
console.log(pb.initials());