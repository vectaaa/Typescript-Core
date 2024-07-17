var greeting = "Today is monday";
console.log(greeting);
//Number
var userId = 398798;
typeof (userId);
//boolean
var isLoggedIn = true;
//any
var hero;
function getHero() {
    return 'write';
}
hero = getHero();
//functions in ts
function addTwo(num) {
    return num + 5;
}
function signUser(name, age, color) { }
function loginUser(name, password, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
}
loginUser("chigold", "password12");
signUser("Vecta", 39, "Red");
addTwo(4);
