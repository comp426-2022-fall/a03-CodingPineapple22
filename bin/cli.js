#!/usr/bim/env node
import minimist from 'minimist';
import { roll } from "../lib/roll.js"

const arg = minimist(process.argv.slice(2));

var sides, dice, rolls = 0; 

if(arg.sides){ sides = arg.sides;}else{sides = 6;}

if(arg.dice){ dice = arg.dice;}else{dice = 2;}

if(arg.rolls){rolls = arg.rolls;}else{rolls = 1;}

console.log(roll(sides, dice, rolls) 
