

// function plus() {
//     let sum = 5 + 6
//     return sum 
// }
// plus()
// console.log(plus());

// function plus( num1,num2) {
//     let sum = num1 +num2
//     return sum 
// }

// console.log(plus(3,5));
//  let number = 7
//  console.log(plus(5,number));
//  console.log(plus(number, plus(1,2)));
//  console.log(plus());
// let answer = plus(123,243)
// console.log(answer);
// console.log(Math.floor(123.6));
// console.log(Math.random ());
// function random() {
//     return Math.floor(Math.random()* 10 + 1) 
// }

// console.log(random());

// function random(min,max) {
//     return Math.floor(Math.random() * (max +1 - min)+min)
// }
// console.log(random(30,70));
// var a = prompt('задайте число')

function random(min,max) {
    return Math.floor(Math.random() * (max +1 - min)+min)
}
let min =+prompt('Введите минимальное значение ')
let max=+prompt('Введите максимальное значение ')

 for ( let i = 0; i < 10; i++){
    let a = random(min,max)
    let b = random(min,max)
    let c = +prompt( a + '+' + b + '= ?')
    let answer = (a + b) == c ? 'молодец' : 'ошибка'
    alert(a + ' + ' + b + ' = ' + (a + b ) + 'вы ответили' + c + answer)
 }
  
 
 
