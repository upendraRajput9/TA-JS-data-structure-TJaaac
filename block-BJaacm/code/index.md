```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true because both newUser and user addresing some object so it is true
- `user === newUser;`// true because both newUser and user addresing some object so it is true
- `user.name === newUser.name;`//true because both newUser and user addresing some object that's why here same  keyword is also equal 
- `user.name == newUser.name;`// true because both newUser and user addresing some object that's why here same  keyword is also equal 
- `user.sibling == newUser.sibling;`//true because both newUser and user addresing some object that's why here same  keyword is also equal 
- `user.sibling === newUser.sibling;`//true because both newUser and user addresing some object that's why here same  keyword is also equal 
- `user.sibling == allBrothers;`//false because user sibling is a keyword and allBrothers is a typeof object.
- `user.sibling === allBrothers;`//false because user sibling is a keyword and allBrothers is a typeof object.
- `brothersCopy === allBrothers;`//false because brothersCopy assign user.sibling and it is a key so that it is not equal to allBrothers.
- `brothersCopy == allBrothers;`//false because brothersCopy assign user.sibling and it is a key so that it is not equal to allBrothers.
- `brothersCopy == user.sibling;`//true because brotherCopy is copy by reference to user.sibling.
- `brothersCopy === user.sibling;`//true because brotherCopy is copy by reference to user.sibling.
- `brothersCopy[0] === user.sibling[0];`//true because brotherCopy is copy by reference to user.sibling so its element also equal
- `brothersCopy[1] === user.sibling[1];`//true because brotherCopy is copy by reference to user.sibling so its element also equal
- `user.sibling[1] === newUser.sibling[1];`//true because both newUser and user addresing some object that's why here same  keyword and its value is also equal .
