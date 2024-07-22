const greeting : string = "Today is monday";

console.log(greeting);

//Number

const userId = 398798;
typeof(userId);

//boolean
const isLoggedIn = true;

//any
let hero : string;

function getHero() {
    return 'write';
}

hero = getHero();

//functions in ts
function addTwo(num: number): number {
    return num + 5;
}

function signUser (name: string, age: number, color: string) {}

function loginUser( name: string, password: string, isLoggedIn: boolean = false){

}

loginUser("chigold", "password12");
signUser( "Vecta", 39, "Red" );
addTwo(4);


//Better ways to write functions
const getHelp = (shoutHelp: string ): string => {
    return "Help chigo!!"
}

const heros = [ "Spiderman", "superman", "batman"];

heros.map((hero) : string => {
    return `hero is ${hero}`
});

