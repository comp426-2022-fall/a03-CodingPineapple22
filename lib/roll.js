<<<<<<< HEAD
export function roll(x,y,z){
	let sides = x;
	let dice = y; 
	let rolls = z; 
	let results = new Array(z);
=======
export function roll(sides, dice, rolls){
	let results = [];  
>>>>>>> 07ffbeeee08841a1672dfba8fa276ae76ca667e1
	for(let i = 0; i < rolls; i++){
		let sum = 0; 
		for(let j = 1; j < dice; j++){
			sum += Math.floor(Math.random() * sides) + 1;
		} 
<<<<<<< HEAD
		results[i] = sum;  
	} 

	return JSON.stringify( {
		"sides" : sides,
		"dice": dice,
		"rolls": rolls,
		"results": all_rolls
	} ); 
}

=======
		results.push(sum);  
	} 

	return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results":  results}); 
} 
>>>>>>> 07ffbeeee08841a1672dfba8fa276ae76ca667e1
