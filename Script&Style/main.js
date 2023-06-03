/* HEADER */

let headerLinks = document.querySelectorAll('#header-links a');
let hamburgerMenu = document.querySelector('#hamburger-menu');
let lines = document.querySelectorAll('.line');
let dugmeNaVrh = document.getElementById("nazad-na-vrh"); // nazad na vrh dugme

console.log(headerLinks);

hamburgerMenu.addEventListener('click', function() {
    headerLinks.classList.toggle('show');
    lines.forEach(line => line.classList.toggle('active'));
});

window.addEventListener('scroll', function() {
    let header = document.querySelector('header'); // header animacija
    
    if (window.scrollY > header.offsetTop) { // header animacija
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)'
        headerLinks.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.borderColor = 'black';
            element.style.color = 'black';
        });
    } else { // header animacija
        header.style.backgroundColor = 'var(--color-A)';
        header.style.borderBottom = 'none';
        header.style.boxShadow = 'none'
        headerLinks.forEach(element => {
            element.style.backgroundColor = 'var(--color-A)';
            element.style.borderColor = 'black';
            element.style.color = 'black';
        });
    }
    pokaziDugme(); // nazad na vrh dugme
});

headerLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      if (window.scrollY > header.offsetTop){
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
      } else {

      }
    });
  
    link.addEventListener('mouseout', function() {
        if (window.scrollY > header.offsetTop){
            this.style.backgroundColor = 'white';
            this.style.color = 'black';
          } else {
    
          }
    });
  });





/*  NAZAD NA VRH DUGME  */


// pokazuje-skriva dugme
function pokaziDugme() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    dugmeNaVrh.style.display = "block";
  } else {
    dugmeNaVrh.style.display = "none";
  }
}

// pritiskom na dugme vraca na vrh stranice
function naVrh() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox...
}


  