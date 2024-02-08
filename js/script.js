// Пример 1
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
// 	console.log('Я сыт');
// }

// console.log((hamburger && fries)); 


// Пример 2
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries){
// 	console.log('Все сыты')
// } else {
// 	console.log('Мы уходим')
// }

// Пример 3
const hamburger = 0;
const fries = null;
const cola = 0;

if (hamburger || cola || fries) {
	console.log('Все довольні')
} else {
	console.log('Мы уходим')
}

console.log(hamburger || cola || fries)