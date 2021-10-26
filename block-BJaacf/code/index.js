// 1. Create an array named numbers and store 5 number values in it
let numbers= [4, 5, 2, 7, 9];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let number of numbers){
   sum += number;
   console.log(`The sum of array is ${sum}`); 
}
// 3. Calculate the average of array items and print it to the console using console.log()
let average= sum/numbers.length;
console.log(`The average of array items is ${average}`);
// 4. Find the highest number in the array and print it to the console using console.log()
let heighestNumber = numbers[2];
for(let number of numbers){
    if(number>heighestNumber){
    heighestNumber=number;
}
console.log(heighestNumber)
}
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNumber = numbers[2]
for(let number of numbers){
    if(number>lowestNumber){
        lowestNumber=number;
}
}
console.log(lowestNumber)
// 6. Find the even numbers in the array and print them to the console using console.log()
for(let number of numbers){
if(number % 2===0){
    console.log(`the even number is ${number}`)
}
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for(let number of numbers){
    if(number % 2!==0){
        console.log(`the odd number is ${number}`)
    }
    }
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let number of numbers){
    if(number % 5===0){
        console.log(`the number is divided by 5 is ${number}`)
    }
    }
// 9. Log all the element of the array one by one
for(let i =0; i<numbers.length; i++){
    console.log(`${i}: ${numbers[i]}`);
}
// 10. Find all the number in the array that is divisible by 3
for(let number of numbers){
    if(number % 3===0){
        console.log(`the number is divided by 3 is ${number}`)
    }
}