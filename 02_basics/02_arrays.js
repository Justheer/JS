const realHeros = ["thor", "ironman", "spiderman" ]
const heros = ["superman", "flash" , "batman"]

realHeros.push(heros)

console.log(realHeros);
console.log(realHeros[3][1]);

const allHeros = realHeros.concat(heros)
console.log(realHeros);

const all_new_heros = [...realHeros, ...heros]
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anither_array = another_array.flat (Infinity)
console.log(real_anither_array);


console.log(Array.isArray("heer"));
console.log(Array.from("heer"));
console.log(Array.from({name: "heer"})); //intresting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //intersting case







