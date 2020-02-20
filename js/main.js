/*
  SCOPO del gioco: stampare i numeri da 1 a 100 e al posto dei multipli
  del 3, 5 ed entrambi visualizzare rispettivamente Fizz, Buzz e FizzBuzz

  - Prima di tutto mi creo l'array che conterrà i numeri
  - Poi utilizzarò un ciclo for per inserire tutti i numeri nella suddetta array e stamparli tutti
  - Dopodichè al suo interno selezionerò con una if i numeri che rispettano
    le suddette caratteristiche e li sostituisco a schermo con le rispettive parole
*/

// Mi creo una array
var numeri = [];
// console.log(numeri);

// var sentinella = 0;
var resto = 0;
// console.log(sentinella);

// Stampo tutti i numeri da 1 a 100 filtrandoli

// METODO 1
/*
for (var i = 0; i < 100; i++) {
  // sentinella = sentinella + 1;
  numeri.push((i + 1));

  if (((resto = numeri[i] % 3) == 0) && ((resto = numeri[i] % 5) == 0)) {
    numeri[i] = "FizzBuzz";
  } else if ((resto = numeri[i] % 3) == 0) {
    numeri[i] = "Fizz";
  } else if ((resto = numeri[i] % 5) == 0) {
    numeri[i] = "Buzz";
  }
  document.getElementById('text').innerHTML += " " + numeri[i] + " ";
}
*/


// METODO 2
for (var i = 0; i < 100; i++) {
  // sentinella = sentinella + 1;
  if (((resto = (i + 1) % 3) == 0) && ((resto = (i + 1) % 5) == 0)) {
    document.getElementsByClassName('element')[i].innerHTML = "FizzBuzz";
  } else if ((resto = (i + 1) % 3) == 0) {
    document.getElementsByClassName('element')[i].innerHTML = "Fizz";
  } else if ((resto = (i + 1) % 5) == 0) {
    document.getElementsByClassName('element')[i].innerHTML = "Buzz";
  } else {
    document.getElementsByClassName('element')[i].innerHTML = (i + 1);
  }
}
