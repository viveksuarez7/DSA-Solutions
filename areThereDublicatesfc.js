function areThereDupblicates(a,b,c){
    let collection = {};
    for(let val in arguments){
        collection[arguments[val]]=(collection[arguments[val]]||0)+1;
    }
    for(key in collection){
        if(collection[key]>1) return true;
    }
    return false;
}
console.log(areThereDupblicates(1,2,2));