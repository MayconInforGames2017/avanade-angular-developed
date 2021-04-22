function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/";
}

function trocar(elemento) {
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML =  "Obrigado por passar o mouse";
   //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML =  "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*
function soma(n1, n2) {
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
        prompt("Cadastrado com sucesso!")
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Digite a sua idade")
console.log(validaIdade(idade));

alert(soma(5, 10));
alert(soma("Vai japão", "Japão", "Brasil"));

*/