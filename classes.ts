interface IPerson {
    id : number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person implements IPerson {

    readonly id : number; // readonly : não altera fora da classe, só pode ser alterado dentro do "constructor"
    name: string; // protected: faz com que a variável só consiga ser acessada dentro da sua classe ou sub classe
    age: number;

    constructor(id: number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name
    }
}

const pessoa = new Person(1,'João',37) 