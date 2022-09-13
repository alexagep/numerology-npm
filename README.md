# NumerolJS [![NPM Module](https://img.shields.io/badge/NPM-V1.1.3-green)](https://github.com/alexagep/numerology-npm)

A library to convert birthdate to numerology number. Can be used to study of numbers, such as the figures in a birth date, and of their supposed influence on human affairs.



## Install

For npm users:

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

const numerolInstance = new numerol.Numeroljs();

numerolInstance.handle('1989/05/22'); // 9
numerolInstance.handle('1368/04/07', 'jalali'); // 7
```

either you can write in american format
you can also use two date separators ('/' or '-') 


``` javascript
import { Numeroljs } from 'numeroljs';

const numerolInstance = new Numeroljs();

console.log(numerolInstance.handle('1989-22-05')); // 9
console.log(numerolInstance.handle('1368-04-07', 'jalali')); // 7
```


you can use convertName method to calculate chaldean Numerology number of your name 


``` javascript
import { Numeroljs } from '../../lib/index.js';

const numerolInstance = new Numeroljs();


console.log(numerolInstance.convertName('John Doe')); // 7
```



## 🤝 Contribution

I will be grateful for any help you can provide to make this project better.
Thank you to all the people who already contributed to NumerolJS!


[![Contributors](https://contrib.rocks/image?repo=alexagep/numerology-npm)](https://github.com/alexagep/numerology-npm/graphs/contributors)


## License

numeroljs is released under the [MIT](LICENSE) license.


## Keywords
Numeroljs, Numerology