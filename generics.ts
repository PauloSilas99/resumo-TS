
const returnValue = <T>(value: T) => value
const message = returnValue<String>('Hello World')
const count = returnValue<Number>(5)


function getFirstValueArray<Type>(array: Type[]){
    return array[0]
}
const firstValueFromStringArray = getFirstValueArray<string>(["1","2"])
const firstValueFromNumberArray = getFirstValueArray<number>([10,20])

// Promises
const returnPromise = async (): Promise<number> => {
    return 5
}

//Classes
class GenecricNumber <T> {
    zeroValue: T;
    sum: (x:T,y:T) => T;
    constructor( zeroValue:T, sum: (x:T,y:T) => T ){
        this.zeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenecricNumber<number>(0,(x:number, y:number)=>{
    return x + y;
})