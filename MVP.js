var time
var today
if(time<10){
    return('Latte');
}
if(time>=1000 && time<=1600){
    return('HotChocolate');
}
if(time>=1600 && time<=2200){
    if(today='Wednesday'){
        return('StrawberryIceCream');
    }
    else{
    return('VanillaIceCream');
}
}
if(time<2200){
    console.log('Time for bed!');
}