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
console.log(food)
const food2 = {
    appetizer: 'chips and queso',
    entree: 'chicken burrito',
    dessert: 'churros',
    drink: 'margarita',
}

const { entree } = food;
const { appetizer } = food; //should put them on the same line to make it cleaner

const { entree: mexicanDinnerEntree, appetizer: mexicanDinnerAppetizer } = food2; // aliasing

console.log(entree);
console.log(food.entree);
console.log(mexicanDinnerEntree, mexicanDinnerAppetizer)

food.dessert2 = 'key lime pie'

for (let course in food){
    console.log(food[course]);
}

const food2Keys = Object.keys(food2); //current practice
console.log(food2Keys)



class Meal {
    constructor(entree, drink){
        this.entree = entree;    //left side is putting it on class
        this.drink = drink;     //right side needs to match name of argument (in constructor)

    }

    addApp(app) {
        this.appetizer = app;  //on left needs to match object
    }
}

const myDinner = new Meal('spaghetti', 'coffee');
myDinner.addApp('queso')

const dinnerObj = {
    entree: 'chicken',
}
console.log(myDinner);
console.log(dinnerObj)




class RestaurantMeal extends Meal {
    constructor(staff, entree, drink){
        super(entree, drink)
        this.staff = staff;
    }

    tip(){
        console.log('thank you for gratuity')
    }
}

const fogoDeChao = new RestaurantMeal(['marissa', 'david'], 'tons of meat', 'mango mint lemonade')
fogoDeChao.addApp('salad bar');
fogoDeChao.tip();
console.log(fogoDeChao);