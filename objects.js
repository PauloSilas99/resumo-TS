"use strict";
// Type
// Objeto que pode ser definido quais propriedades pode ter e quais os tipos respectivos de cada propriedade
const user = {
    firstName: 'Paulo',
    age: 24,
    email: 'fonsecasodreps@hotmail.com',
    password: 'ps021922',
    orders: [
        {
            productId: 'id',
            price: 20
        }
    ],
    register() {
        return "a";
    },
};
const grade = 1;
const author = {
    age: 25,
    books: ['Biblia', 'A volta ao mundo em 80 dias'],
    email: 'author@hotmail.com',
    firstName: 'João',
    orders: [],
    register() {
        return "b";
    },
};
