
// Type
// Objeto que pode ser definido quais propriedades pode ter e quais os tipos respectivos de cada propriedade

type Order = {
    productId: string,
    price: number
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string //O "?" no TypeScript quer dizer que isso é opcional, será string ou undefined
    orders: Order[]
    register(): string //para receber função com um retorno em uma string
}

const user : User = {
    firstName:'Paulo',
    age: 24,
    email: 'fonsecasodreps@hotmail.com',
    password: 'ps021922',
    orders:[
        {
            productId:'id',
            price:20
        }
    ],
    register() {
        return "a"
    },
}

type Grade =  number | string; // o type pode ser usado dessa forma também
const grade:Grade = 1

// Unios
// une propriedades de diferentes objetos

type Author = {
    books: string[]
}

const author: Author & User = {
    age:25,
    books:['Biblia','A volta ao mundo em 80 dias'],
    email:'author@hotmail.com',
    firstName:'João',
    orders:[],
    register() {
        return "b"
    },
}


