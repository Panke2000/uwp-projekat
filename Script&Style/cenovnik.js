let datum = new Date();
let danasnjiDan = document.getElementById('danasnji-dan');
let getDanasnjiDan = datum.getDay();
let danasnjiPopust = '';

switch(getDanasnjiDan) {
    case 0: danasnjiDan.innerHTML = 'NEDELJA'; danasnjiPopust = 'popust-ned'; break;
    case 1: danasnjiDan.innerHTML = 'PONEDELJAK'; danasnjiPopust = 'popust-pon'; break;
    case 2: danasnjiDan.innerHTML = 'UTORAK'; danasnjiPopust = 'popust-uto'; break;
    case 3: danasnjiDan.innerHTML = 'SREDA'; danasnjiPopust = 'popust-sre'; break;
    case 4: danasnjiDan.innerHTML = 'CETVRTAK'; danasnjiPopust = 'popust-cet'; break;
    case 5: danasnjiDan.innerHTML = 'PETAK'; danasnjiPopust = 'popust-pet'; break;
    case 6: danasnjiDan.innerHTML = 'SUBOTA'; danasnjiPopust = 'popust-sub'; break;
}

let iznos = document.getElementById('iznos');

let zbir = document.querySelectorAll('[id^="tretman-"]');
let zbirAkcija = document.getElementById('zbir-akcija');

for (let i = 0; i < zbir.length; i+=2) {
    const el = zbir[i];
    if (el.classList.contains(danasnjiPopust)) {
        let span = el.childNodes[3].childNodes[0];
        let naziv = el.childNodes[1];
        /*console.log(zbirAkcija);*/
        let noviSpan = document.createElement('span');
        noviSpan.textContent = naziv.innerHTML;
        /*console.log(noviSpan);*/
        zbirAkcija.appendChild(noviSpan);

        let cena = span.innerHTML;
        /*console.log(cena);*/
        cena*=0.75;
        /*console.log(cena);*/
        span.innerHTML = cena;
        span.parentNode.style.color = 'red';
        naziv.style.color = 'red';


    }
    
}

let prikazIznosa = document.getElementById('cenovnik-cont-racun');

document.addEventListener('click', (e) => {
    /*console.log(e.target);*/
    let cena = iznos.innerHTML;
    let cenaSpan = e.target.parentNode.parentNode.childNodes[3].childNodes[0].innerHTML;
    /*console.log(cena);*/

    console.log(e.target.nodeName === 'A');

    if (e.target.value === 'DODAJ') {

        
        cenaSpan = parseInt(cenaSpan);
        cena = parseInt(cena);
        cena+=cenaSpan;
        iznos.innerHTML = cena;

        e.target.value = 'ODUZMI';
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';

        if ( prikazIznosa.classList.contains('hide') ) {
            prikazIznosa.classList.remove('hide');
        }

    } else if (e.target.value === 'ODUZMI') {

        cenaSpan = parseInt(cenaSpan);
        cena = parseInt(cena);
        cena-=cenaSpan;
        iznos.innerHTML = cena;

        e.target.value = 'DODAJ';
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black';

        if ( cena === 0 ) {
            prikazIznosa.classList.add('hide');
        }

    } else if (e.target.nodeName === 'A') { 
        return;
        
    } else {
        alert('DOSLO JE DO GRESKE!');
    }

});
