#!/usr/bim/env node
import minimist from 'minimist';
<<<<<<< HEAD
import { roll } from "/lib/roll.js"
=======
import { roll } from "../lib/roll.js"
>>>>>>> 07ffbeeee08841a1672dfba8fa276ae76ca667e1

const arg = minimist(process.argv.slice(2));

var sides, dice, rolls = 0; 

<<<<<<< HEAD
if(arg.sides){ sides = arg.sides;}else{sides = 6;}

if(arg.dice){ dice = arg.dice;}else{dice = 2;}

if(arg.rolls){rolls = arg.rolls;}else{rolls = 1;}

console.log(roll(sides, dice, rolls)); Z
=======
sides = arg.side ? arg.sides : 6
dice = arg.dice ? arg.dice:2;
rolls = arg.rolls? arg.rolls: 1; 

console.log(roll(sides, dice, rolls));

>>>>>>> 07ffbeeee08841a1672dfba8fa276ae76ca667e1
