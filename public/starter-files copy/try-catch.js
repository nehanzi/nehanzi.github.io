/*
    1. Write a Try-Catch block where the `try` statement has no errors
*/
try {
    consooooole.log('this is the try block')
    console.log('everything is fine.')
} catch {
    console.log('this is the catch block')
    console.log('everything is not fine.')
}
/*
    2. Write a Try-Catch block where the `try` statement has an error
*/

/*
    3. Write a Try-Catch block with `throw` statements to define the error
*/
// let loadedDice;
// while (loadedDice !== 4){
//     loadedDice = Math.ceil(Math.random() * 6);
//     console.log(loadedDice)
//     try {
//         if (loadedDice < 4){
//             throw "Dice rolled too low";
//         }
//         if (loadedDice > 4){
//             throw "Dice rolled too high";
//         }
//         console.log('Dice finished rolling. Result is ' +loadedDice)
//     } catch (error) {
//         console.log(error)
//     }
// }
/*
    4. Import the `prompt-sync` module
*/
const promptSync = require('prompt-sync');
const prompt = promptSync();
/*
    5. Store the user input in a variable called `password`
*/
const password = prompt('Store a password 4 characters or longer: ')
console.log('Your password is: ' + password);
// prompt does 3 things
// 1. console.log its String
// 2. take in input in the terminal
// 3. return what the user typed

/*
    6. Write a Try-Catch block to check the length of the password
*/
try {
    if (password.length < 4){
        throw 'Password has a minimum length of 4.'
    }
    console.log('Your password is accepted!')
} catch (error) {
    console.log(error)
}