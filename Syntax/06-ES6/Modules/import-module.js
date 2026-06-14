/*=====================NAMED IMPORT=====================*/

import {Pi, add,} from './export-module.js';
console.log(Pi)

/*=====================DEFAULT IMPORT=====================*/

import User from './export-module.js';

const guest = new User(`Miguel`);
guest.sayMiguel();