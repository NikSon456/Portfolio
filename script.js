let nav = document.querySelector('#nav');
let logo = document.querySelector('#logo1');
let toggle = document.querySelector('#toggle');
toggle.onclick = function(){
    if(nav.classList.contains('nav1') == true){
    nav.classList.remove('nav1');
    logo.classList.add('logo1')
    logo.classList.remove('logo2');
    } else {
    nav.classList.add('nav1');
    logo.classList.remove('logo1')
    logo.classList.add('logo2');
    }
}