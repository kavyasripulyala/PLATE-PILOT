const meals = [

"Egg Bhurji + Roti",
"Soya Curry Rice",
"Dal Khichdi",
"Paneer Bhurji",
"Moong Dal Chilla",
"Poha",
"Upma",
"Oats Banana Shake",
"Sprouts Salad",
"Peanut Butter Toast",
"Vegetable Pulao",
"Chole Rice",
"Rajma Rice",
"Boiled Eggs",
"Vegetable Sandwich",
"Curd Rice",
"Soya Fried Rice"

];

function generateMeal(){

let random =
Math.floor(
Math.random()*meals.length
);

alert(
"🥗 New Suggested Meal:\n\n"
+ meals[random]
);

}