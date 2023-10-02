var menoraltura = 0;
var maioraltura = 0;
var somaalturahomens = 0;
var mediaalturahomens = 0;
var qdemulheres = 0;
var qdehomens = 0;
var m = 0;
var n = 0;
//var i = 0;

qde_pessoas = parseInt(prompt('Digite a quantidade de pessoas: '));

for (let i = 0; i < qde_pessoas; i++){
    altura = parseFloat(prompt('Digite a altura da ' + (i+1) + 'ª pessoa: '));
    genero = prompt('Digite o gênero (M ou F) da ' + (i+1) + 'ª pessoa: ');

    if (genero == 'f' || genero == 'F'){
        qdemulheres += 1;
    }
        
    if (genero == 'm' || genero == 'M'){
        qdehomens += 1;
        somaalturahomens = somaalturahomens + altura;
        mediaalturahomens = somaalturahomens / qdehomens;
    }
        
    if (altura > maioraltura && menoraltura == 0){
        menoraltura = altura;
        maioraltura = altura;
    }
        

    else if (altura < menoraltura){
        menoraltura = altura;
        m = i;
    }
        

    else if (altura > maioraltura){
        maioraltura = altura;
        n = i;
    }
}    

alert('Pessoa com menor altura é a ' + (m+1) + 'ª pessoa: ' + menoraltura + 'm');
alert('Pessoa com maior altura é a ' + (n+1) + 'ª pessoa: ' + maioraltura + 'm');
alert('A média da altura dos homens é: ' + mediaalturahomens.toFixed(2) + 'm');
alert('A quantidade de mulheres são: ' + qdemulheres);