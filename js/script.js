// Spread haqida  spread bu 3 ta nuqta bilan clonlash uchun ishlatiladi

const number = [1,2,3];
function logger(a,b,c){
    console.log(a+b+c);
}
logger(...number);
