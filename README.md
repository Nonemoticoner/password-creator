# password-creator
A Node module for creating randomized passwords from chosen set of signs.

#### Installation
```bash
$ npm install password-creator
```

#### How to use
Basic usage with number (length) as argument:
```js
var pc = require('password-creator');

var pass = pc.create(20); //  "f9Wp>=\qJqx]rwwbbiQ8
```
Custom configuration is available by giving an object as argument:
```js
var pc = require('password-creator');

// this is the default configuration that can be overwritten
var pass = pc.create({
  sets: {
		letters: true,  // abcdefghijklmnopqrstuvwxyz
		lowercase: true,
		uppercase: true,
		digits: true, // 0123456789
		special: true,  // !@#$%^&*()_+-={}[]|:;"'<>,.?/\~`
		space: false, // could password have spacebars?
		exclude: "" // a string containing signs you don't want your password have eg. "abc"
	},
	length: 6
});   // p>=\qJ
```
