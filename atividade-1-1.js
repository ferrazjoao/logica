
var user = require ('readline-sync') 
var anonascimento = user.question ("Qual o ano de Nasicmento    ")
var idade = 2020 - anonascimento

if (idade <16) {    
console.log("Nao Pode votar")}

else if (idade >=18){

console.log("Deve votar")}

else (idade >=16)
{console.log ("Pode Votar")}