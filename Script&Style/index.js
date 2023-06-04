
/* Menja nagrade nakon vremenskog intervala */

let nagrada1 = document.getElementById('nagrada-1');
let nagrada2 = document.getElementById('nagrada-2');
let nagrada3 = document.getElementById('nagrada-3');
let last = 1;

console.log(nagrada1);

setInterval(function() {
  switch (last) {
    case 1:
      fadeOut(nagrada1, function() {
        if (nagrada1.innerHTML === '- "Najbolji kozmeticki salon na teritoriji juzne Srbije" ') {
          nagrada1.innerHTML = '- "Sydney Sweeney 2020"';
        } else {
          nagrada1.innerHTML = '- "Najbolji kozmeticki salon na teritoriji juzne Srbije" ';
        }
        fadeIn(nagrada1);
      });
      last = 2;
      break;
    case 2:
      fadeOut(nagrada2, function() {
        if (nagrada2.innerHTML === '- "Profesionalno osoblje" za tri uzastopne godine ') {
          nagrada2.innerHTML = '- "Milano summit 2021"';
        } else {
          nagrada2.innerHTML = '- "Profesionalno osoblje" za tri uzastopne godine ';
        }
        fadeIn(nagrada2);
      });
      last = 3;
      break;
    case 3:
      fadeOut(nagrada3, function() {
        if (nagrada3.innerHTML === '- "Manikir professional by Francais beaute"') {
          nagrada3.innerHTML = '- "Beauty salon Awards 2022"';
        } else {
          nagrada3.innerHTML = '- "Manikir professional by Francais beaute"';
        }
        fadeIn(nagrada3);
      });
      last = 1;
      break;
  }
}, 2000);

function fadeOut(element, callback) {
  let opacity = 1;
  let timer = setInterval(function() {
    if (opacity <= 0.1) {
      clearInterval(timer);
      element.style.opacity = '0';
      callback();
    }
    element.style.opacity = opacity;
    opacity -= opacity * 0.1;
  }, 50);
}

function fadeIn(element) {
  let opacity = 0;
  let timer = setInterval(function() {
    if (opacity >= 0.9) {
      clearInterval(timer);
      element.style.opacity = '1';
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}