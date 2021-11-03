// LuanaBarbosa 10-2021
// WD20, FBAUP

// Ideia: ter um fundo coberto com a palavra privacy com baixa opacidade e repetida várias vezes (ler tanto na horizontal como na vertical)
// em que ao passar o rato por cima se mudam as propriedades das letras (aumentar a opacidade e o peso)
// o rato tem a palavra transparency e um círculo



//////criar ciclos para escrever a palavra PRIVACY no fundo
//na vertical
for(let i=0; i<80; i++){
    
 //criar array com as letras da palavra
 let privacy=[7];

 //definir a posição de cada letra dentro do array
 privacy[0]="P";
 privacy[1]="R";
 privacy[2]="I";
 privacy[3]="V";
 privacy[4]="A";
 privacy[5]="C";
 privacy[6]="Y";

 //criar variável com a localização do main 
 let target = document.querySelector("main");


    //na horizontal
    for(let k=i; k<80; k++){

      //definir que cada letra vai ser um span
      let letra = document.createElement("span");

      //sempre que as posições do array privacy chegam ao fim (7) recomeça do 1
      letra.innerHTML = privacy[k%7];

      //colocar o span da letra no main
      target.appendChild(letra);
    }

 //definir que cada letra vai ser um span
 let letra = document.createElement("span");

 //sempre que as posições do array privacy chegam ao fim (7) recomeça do 1
 letra.innerHTML = privacy[i%7]+ '<br>';

 //colocar o span letra no main
 target.appendChild(letra);
}



//////atribuir classes aos spans

//criar um array com todos os spans
let allSpans=document.querySelectorAll("span");

// percorrer todos os spans das letras
for(let i = 0; i < allSpans.length; i++) {

 // dá-lhe uma classe
 allSpans[i].setAttribute('class', 'light');

}




//////adicionar um evento a cada um dos elementos do array allSpans

allSpans.forEach(function(rato) {
    
    // atribui o evento e respertiva função a cada um
    rato.addEventListener('pointerover', changeOpacity);
});



//////definir a função que irá acontecer quando o rato está sobre as letras

function changeOpacity(r) {

    //console.log(r); // verificar as as propriedades do evento

    // mudar propriedades CSS do elemento
    r.target.style = 'transition: all 0.3s';

    // ou atribuir/remover classes
    r.target.classList.toggle("black");
  


 // depois retira-se as classes
    setTimeout( () => {
      r.target.style = 'transition: all 1s';
      r.target.classList.toggle("black");
      //define-se o tempo que irá demorar a voltar ao normal
    }, 8000);
}



//////definir o cursor

//identificar o cursor por mim definido
let cursor = document.querySelector('.cursor');

//cria-se um evento
document.addEventListener('pointermove', function (c){    

  //ir 'buscar' posição do rato
    //console.log(c.pageX , c.pageY);

  //coloca-a em variáveis
    let posX= c.pageX;
    let posY= c.pageY;
   //usa-se estas variáveis para definir a localização do círculo
    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px' ;
  },true);



//////responsive (usando if no js) para o footer
let rodape = document.querySelector("footer");

let x = window.matchMedia("(min-width: 500px)");

x.addListener(ecraGrande);

//definir a função
function ecraGrande(e) {
  if (e.matches) {
    rodape.style.fontSize = "1.3vw";
  }
}

// fazer a função correr
ecraGrande(x);
