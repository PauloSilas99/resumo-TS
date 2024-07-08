const sum = (x:number,y:number): string | number => {
    return (x + y).toString();
};

const value = sum(2,3);
console.log(value);

//"Void" => função void não retorna nada
const log = (messege:string):void => {
    console.log(messege);
}

// Interfaces + functions
// essa interface quer dizer que : toda função que implementar essa interface precisa receber o x, o y e precisa retornar um number 
interface MathFunc {
    (x:number,y:number): number;
}

const subtrair:MathFunc = (x:number,y:number)=>{
    return x - y
}