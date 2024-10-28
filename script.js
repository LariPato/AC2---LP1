//QUESTÃO 1
/*1 – (1 ponto) Ao cadastrar os produtos, uma loja percebeu que alguns produtos foram cadastrados de 
forma errada. 
Atualize o array corrigindo os valores que necessitam de correção. (Não é necessário o uso de forEach 
    neste exercício)*/

/*let produtos = ["Celuar", "Mouse", "Monitor", "Notebbok", "Impressora", "Teclado", "Telveisão", "Fone", "Webcam", "HD Externo"];
 
produtos [0] = "Celular"
produtos [3] = "Notebook"
produtos[6] = "Televisãosão"*/


//ECERCÍCIO 2
//2 – (1 ponto) Dado um array, adicione em um novo array todos os números, porém se o número for ímpar, ele deve ser multiplicado por um número aleatório entre 1 e 10.

/*let numeros = [2, 5, 8, 13, 16, 21];
let numerosArrumados = [];
let numeroAleatorio = Math.random()*10

numeros.forEach(function(arrumarNumeros){
   
    resultado = arrumarNumeros % 2
   
    if(resultado  === 0){

       numerosArrumados.push(arrumarNumeros)
    }
    else{
        
        let impar = arrumarNumeros*numeroAleatorio
        numerosArrumados.push(impar)
        
    }
console.log(numerosArrumados)

})*/

//EXERCÍCIO 3
//3 – (1 ponto) Dado o array abaixo, insira em um novo array todos os números arredondados para cima.

/*let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let arredondados = [];

numeros.forEach(function(arredondar){
    arredondados = Math.ceil(arredondar)
    console.log(arredondados)
})*/

//EXERCÍCIO 4 
//4 – (1 ponto) Faça um programa que receba seu nome completo(preencha com o seu nome verdadeiro) e printe no console quantas letras ele possui.
// Lembre-se que você deverá fazer uma condição para que ele não conte os espaços.

/*let nome = prompt("Qual é seu nome?")
let numeroDeLetras = nome.split("")
let contador = 0

numeroDeLetras.forEach(function(contarLetras){

    if(contarLetras != " ")
        contador++
})

console.log(contador)*/

//EXRCÍCIO 5
//5 - (1 ponto) Dado o array numerosOriginais, você deve utilizar forEach para adicionar os números do array novosNumeros no início do 
//array numerosOriginais, de forma que o array final seja:
//[1, 2, 3, 4, 5, 6]

/*numerosOriginais = ["pato"]
novosNumeros = [1, 2, 3, 4, 5, 6]

novosNumeros.forEach(function(patolino){
    numerosOriginais.unshift(patolino)
    console.log(numerosOriginais)
})*/