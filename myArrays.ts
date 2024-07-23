const superHeros: string[] = [];

const horsePower: number[] = [];



// Using push method to add elements to the arrays
superHeros.push('Superman');
horsePower.push(34);


//Specifying a type of User.
type allUsers = {
    name: string,
    accountNumber: number,
    dateOfBirth: string,
    isActive: boolean
}

const userDetails: allUsers[] = [];

userDetails.push({
    name: 'Salibo',
    accountNumber: 21345678,
    dateOfBirth: '1990-20-14',
    isActive: false
});