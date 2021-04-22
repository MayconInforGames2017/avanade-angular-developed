/*
var nome = "Maycon Santana";
var idade = 35;
var idade2 = 10;
var frase = "Japão é o melhor país pra viver";
//alert("Bem vindo " + nome + " sua idade é " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());


var lista = ["Maça", "Banana", "Laranja"];
lista.push("Uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString())
console.log(lista.join(" - "));

*/ 

/* Dicionario

var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);

*/

/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

/*
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
};

*/

/*
var count;
for (count = 0; count <= 5; count++) {
    alert(count);
}

*/

var d = new Date();
//alert(d.getMonth());
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());
console.log("hoje é " + d.getDate + "/" + d.getMonth() + 1);