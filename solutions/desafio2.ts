class Person {
    name: string;
    age: number;
    job: string;

    constructor(name: string, age: number, job: string) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase;
        this.age = age;
        this.job = job.toLowerCase();
    }
}

let pessoa1 = new Person("maria", 29, "atriz");
let pessoa2 = new Person("roberto", 19, "Padeiro");
let pessoa3 = new Person("laura", 32, "Atriz");
let pessoa4 = new Person("carlos", 19, "padeiro");
