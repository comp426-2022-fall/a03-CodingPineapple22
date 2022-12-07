#!/usr/bim/env node
import { roll } from "../lib/roll.js"
import minimist from 'minimist';


const arg = minimist(process.argv.slice(2));

const sides = arg.sides ? arg.sides : 6
const dice = arg.dice ? arg.dice : 2;
const rolls = arg.rolls ? arg.rolls: 1; 

console.log(JSON.stringify(roll(sides, dice, rolls)));

