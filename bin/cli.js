#!/usr/bim/env node
import minimist from 'minimist';
import { roll } from "/lib/roll.js"

const arg = minimist(process.argv.slice(2));

var sides, dice, rolls = 0; 


sides = arg.side ? arg.sides : 6
dice = arg.dice ? arg.dice:2;
rolls = arg.rolls? arg.rolls: 1; 

console.log(JSON.stringify(roll(sides, dice, rolls)));

