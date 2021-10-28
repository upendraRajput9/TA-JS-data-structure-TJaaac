1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`// false because there is no any similiar value.
- What is the value of obj? // we assign a value of obj is {name: "Arya"} but after it was update so the valu of obj is {surname:"strack"}
- `obj == newObj`// false because both varible has different object.
- `obj === newObj`//false because both varible has different object.
- `obj === newObj`//false because both varible has different object.
- `user == newObj`// false because both varible has different object.
- `user == obj`// true because it is copy by reference.
- `arr == arr2`//true because it is copy by reference.
- `arr === arr2`//true because it is copy by reference.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);// { name: 'Alex', age: 25 }; because we already declare the value of age.
console.log(person2);// { name: 'John', age: 50 }; because person2 is copy by value of function personDetails()it only take a value inside a function.
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. output true
console.log(user.brothers.length === brothers.length); //2. output true
```
