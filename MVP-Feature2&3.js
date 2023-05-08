var time

if(time<10){
    return('Latte');
}
if(time>=15 && time<=18){
    if(time%2==0){
        return('IceCream');
    }
    if(time%2==1){
        return('HotChocolate');
    }
}
if(time<22){
    console.log('Time for bed!');
}