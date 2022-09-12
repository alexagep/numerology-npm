# Form-Data [![NPM Module](https://img.shields.io/badge/NPM-V1.0.2-green)](https://github.com/alexagep/numerology-npm)

A library to convert birthdate to numerology number. Can be used to study of numbers, such as the figures in a birth date, and of their supposed influence on human affairs.



## Install

```shell
npm i numeroljs
```

For yarn users:

```shell
yarn add numeroljs
```

## Usage

you can use this library for calculation in persian or gregorian dates, it converts itself in a correct way

``` javascript
var numerol = require('numeroljs');

numerol.inPersian('1368/03/01');
numerol.calculateNumerology('1989/05/22'); // outputs
```

either you can write in american format
you can also use two date separators ('/' or '-') 


``` javascript
const { inPersian, calculateNumerology } = require("numeroljs");

console.log(inPersian("1368-03-01"));
console.log(calculateNumerology("1989-22-05"));
```



## 🤝 Contribution

I will be grateful for any help you can provide to make this project better


## License

numeroljs is released under the [MIT](LICENSE) license.