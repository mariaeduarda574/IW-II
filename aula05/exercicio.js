//1-Par ou Ímpar
let num = prompt("Digite um número");
if(num % 2 == 0){
    console.log("Este numero é par")
}else{
    console.log("Este número é impar")
};


//2-Verificação de Maioridade
let idade = prompt ("Digite sua idade:");
if(idade >=18){
    console.log("Você é maior de idade!!")
}else{
    console.log("Você é menor de idade!!")
}


//3-Contagem de 1 a 10
for(var i = 0; i < 11; i++){
    console.log(i)
}

//4-Contagem Regressiva

let num1 = prompt("Digite um número:");
while(num1 >=0){
    console.log(num1);
    num1 --;
}  
//5-Tabuada
let numero = prompt("Digite um número:");

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

//6-Somatório