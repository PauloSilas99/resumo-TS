"use strict";
function Pessoa(nome, data) {
    console.log(`Bem-vindo ${nome},hoje é ${data.toDateString()}!`);
}
Pessoa('Sérgio', new Date());
// Tipos basicos
let age = 5;
const firstname = 'João';
const isValid = true;
const ids = [1, 2, 3, 4, 5];
const nomes = ['Paulo', 'Felipe', 'Mateus'];
// Tupla
const person = [24, 'Paulo'];
// Lista de Tuplas
const people = [
    [24, 'Paulo'],
    [22, 'Nathan'],
    [23, 'Júlio']
];
//Intersections
const productId = 'Paulo';
console.log(productId);
//Enum
// "Atribui um valor a outro valor"
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
//Type Assertions
// "Tenho um tipo e consigo atribuir outro"
const productName = "Boné";
// let itemId = productName as string 
let itemId = productName;
