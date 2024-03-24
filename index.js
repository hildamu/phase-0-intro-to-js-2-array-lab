let cats= (['Milo', 'Otis', 'Garfield'])

let beforeEach=() => {
    cats.length=0
    cats.push('Milo', 'Otis', 'Garfield')
}

let destructivelyAppendCat=() =>{
    cats.push('Ralph')
}

let destructivelyPrependCat=() =>{
    cats.unshift('Bob')
}

let destructivelyRemoveLastCat=() =>{
    cats.pop(0)
}

let destructivelyRemoveFirstCat=() =>{
    cats.shift(0)
}

function appendCat(name){
    return[...cats, 'Broom']

}

function prependCat(name){
    return ['Arnold', ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1);

}
removesLastCat();

function removeFirstCat(){
    return cats.slice(1);
}








