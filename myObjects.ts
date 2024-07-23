// const User = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com',
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         state: 'NY',
//         zip: '12345'
//     },
//     hobbies: ['reading', 'painting', 'cooking'],
//     isActive: false
// };

// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: 'Chigo', isPaid: true, email: 'chigo@gmail.com', phoneNumber: '08026618761'}
// createUser(newUser);

// //This is an example of an object returning an object.
// function createCourse(): {name: string, price: number}{
//     return{
//         name: "walter samuels",
//         price: 200
//     }
// }

// export {}


type User = {
    readonly _id: string,
    name: string, 
    email: string,
    isActive: true,
    creditCardDetails?: number
}


// function createUser(u: User){}

let myUser = {
    _id: '123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    isActive: true,

}

myUser.email = 'vecta@gmail.com';
console.log(myUser.email)


//Mix and match of types

type cardNumber = {
    cardnumber: number
}

type cardName = {
    cardName: string
}
type cardDetails = cardName & cardNumber & {
    cardcvv: number
}