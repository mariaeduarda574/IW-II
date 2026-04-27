function exerc1() {
    var i = document.getElementById('i').value;
    document.getElementById('p1').innerText = i;
}

function exerc2() {
    var nome = document.getElementById('nome').value;
    document.getElementById('p2').innerText = "Olá " + nome ;
}

function exerc3() {
    var idade = document.getElementById('idade').value;
    if (Number(idade) <18) {
       menidade = "Menor de idade"
       document.getElementById('p3').innerText = menidade;
    } else {
      maiidade  = "Maior de idade"
      document.getElementById('p3').innerText = maiidade;
    }
    
}