// interface UUser {
//     name: string,
//     age: number,
//     isActive: boolean,
//     creditCardNumber?: string,
//     hello(a: string): void, 
// }

// const userStu : UUser = {
//     name: "Ronke",
//     age: 23,
//     isActive: true, 
//     hello(text: string): void {
//         console.log(text)
//     },
// }


// console.log(userStu.name)
// console.log(userStu.age)
// console.log(userStu.hello('Rubber Band'));



// interface IUserProps{
//     name: string,
//     age: number,
//     city: string,
//     creditcard: string | null,
//     membership: "basic" | "super"
// }

// const userFuncction = ({name, age, city}: IUserProps) => {
//     return `my name is ${name} i live in ${city}, i am ${age} years old`
// }

// const user = userFuncction({name: "walter", age: 34, city: "washington", creditcard:  "22334455667788", membership: "super" });

// console.log(user);


interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string;   
    getCoupon(couponName: string, value: number): number

}

interface User {
    payToken?: string
}

//Note you can also do inheritance from interfaces 
interface Admin extends User {
    role: "admin" | "user" |  "worker"
}
const vecta: Admin = {
    email: "", userId: 34, googleId: "",
    startTrail() {
        return 'new balance';
    },
    getCoupon (name: "vecta2", nin: 22332244335 ){
        return 30
    },
    role: "worker", 
    payToken: "121213",
    dbId: 0
}