var json = require ('./sample.json')
/*console.log(json.name)
console.log(json.profile)
console.log(json.tools)
console.log(json.tools.length)
console.log(json.tools[1])*/

//console.log(json.address.name)

console.log(json.address[0].name)
console.log(json.address[0].city)

console.log(json.address[1].name)
console.log(json.address[1].city)

console.log(json.address1.homeAddress.street)
