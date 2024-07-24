let score:  number | string = 78;

type StudentUser = {
    name: string,
    id: number,

}

type Admin = {
    username: string,
    id: number
}

//Here we specify the type in union with the symbol * | * so as to be able to use the parameters in both types for a single person. 
let vecta: StudentUser | Admin = {name: 'vecta', id: 232}

vecta = {username: 'somi', id: 76}

console.log('res', vecta);


//Using a function
// function getDbId(id: number | string){
//     //Make Api call here
//     console.log(`DB id is: ${id}`)
// }
getDbId(3);
getDbId('45');

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toUpperCase();
    }
}

