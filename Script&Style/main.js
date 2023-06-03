/* HEADER */

let headerLinks = this.document.querySelectorAll('#header-links a');
let hamburgerMenu = document.querySelector('#hamburger-menu');
let lines = document.querySelectorAll('.line');

console.log(headerLinks);

hamburgerMenu.addEventListener('click', function() {
    headerLinks.classList.toggle('show');
    lines.forEach(line => line.classList.toggle('active'));
});

window.addEventListener('scroll', function() {
    let header = this.document.querySelector('header');
    if (this.window.scrollY > header.offsetTop) {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.75)'
        headerLinks.forEach(element => {
            element.style.backgroundColor = 'white';
            element.style.borderColor = 'black';
            element.style.color = 'black';
        });
    } else {
        header.style.backgroundColor = 'var(--color-A)';
        header.style.borderBottom = 'none';
        header.style.boxShadow = 'none'
        headerLinks.forEach(element => {
            element.style.backgroundColor = 'var(--color-A)';
            element.style.borderColor = 'black';
            element.style.color = 'black';
        });
    }
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

  