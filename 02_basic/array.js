const mar_heros = ["Thor", "Ironman", "Loki"]
const dc_heros = ["Superman", "Batman","Flash"]
// mar_heros.pop()
// mar_heros.shift()
// mar_heros.unshift("Wonda")
// mar_heros.push("Hulk") 
//mar_heros.push(dc_heros)
// let all_heros = mar_heros.concat(dc_heros)
// console.log(all_heros);
let num = [1,2,3,4,5,6,7]
//slice ,, splice,, isArray ,, .from ,, .of
//Sprade ...arrayname
const all_new = [...dc_heros, ...mar_heros, ...num]
console.log(all_new);

