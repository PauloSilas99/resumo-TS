function Pessoa(nome:string,data:Date){
    console.log(`Bem-vindo ${nome},hoje é ${data.toDateString()}!`);
}
Pessoa('Sérgio',new Date());

// Tipos basicos
let age:number = 5;
const firstname:string = 'João';
const isValid:boolean = true;
const ids:number[] = [1,2,3,4,5]
const nomes:string[] = ['Paulo','Felipe','Mateus'];

// Tupla
const person:[number,string] = [24,'Paulo']

// Lista de Tuplas
const people:[number,string][] = [
    [24,'Paulo'],
    [22,'Nathan'],
    [23,'Júlio']
] 

//Intersections
const productId: string | number = 'Paulo'
console.log(productId);

//Enum
// "Atribui um valor a outro valor"
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}
const direction = Direction.Left;
console.log(direction);

//Type Assertions
// "Tenho um tipo e consigo atribuir outro"
const productName: any = "Boné";
// let itemId = productName as string 
let itemId = <String>productName