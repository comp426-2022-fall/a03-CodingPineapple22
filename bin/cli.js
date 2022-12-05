#!/usr/bim/env node
import minimist from 'minimist';
import { roll } from "/lib/roll.js"

const arg = minimist(process.argv.slice(2));

var sides, dice, rolls = 0; 

if(arg.sides != null && arg.sides > 0){ sides = arg.sides;}else{sides = 6;}

if(arg.dice != null && arg.dice>0){ dice = arg.dice;}else{dice = 2;}

if(arg.rolls != null && arg.rolls>0){rolls = arg.rolls;}else{rolls = 1;}

console.log(JSON.stringify(roll(sides, dice, rolls)));
