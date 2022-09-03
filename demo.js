const person = {
    'firstName': 'Chandler',
    "lastName": 'Bong',
    age: 30 //preferred method
};

const personAge = 'age'

console.log(person.firstName); //preferred method
console.log(person['lastName']);
console.log(person[personAge]); //subscripting




const food = {
    appetizer: 'dinsosaur',
    entree: 'ice cream',
    dessert: 'fish tacos',
    drink: 'chocolate milk',
}

const food2 = {
    appetizer: 'chips and queso',
    entree: 'chicken burrito',
    dessert: 'churros',
    drink: 'margarita',
}

const { entree } = food;
const { appetizer } = food; //should put them on the same line to make it cleaner

const { entree: mexicanDinnerEntree, appetizer: mexicanDinnerAppetizer } = food2;

console.log(entree);
console.log(food.entree);
console.log(mexicanDinnerEntree, mexicanDinnerAppetizer)