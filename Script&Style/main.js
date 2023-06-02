/* HEADER */

window.addEventListener('scroll', function() {
    let header = this.document.querySelector('header');
    let headerLinks = this.document.querySelectorAll('#header-links a')
    if (this.window.scrollY > header.offsetTop) {
        header.style.backgroundColor = 'yellow';
        headerLinks.forEach(element => {
            element.style.borderColor = 'red';
            element.style.color = 'red';
        });
    } else {
        header.style.backgroundColor = 'white';
        headerLinks.forEach(element => {
            element.style.borderColor = 'black';
            element.style.color = 'black';
        });
    }
});