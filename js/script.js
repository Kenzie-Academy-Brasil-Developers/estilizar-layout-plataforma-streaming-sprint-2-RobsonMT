// <!-- USUÁRIO 1 -->
function bordas(){
    document.querySelector('#testes--1').classList.remove('bordas');
    document.querySelector('#testes--2').classList.remove('bordas');
    document.querySelector('#clicou').classList.remove('clicou');
    document.querySelector('#testes').classList.add('bordas');
    
}

// <!-- USUÁRIO 2 -->
function bordas1(){
    document.querySelector('#testes').classList.remove('bordas');
    document.querySelector('#testes--2').classList.remove('bordas');
    document.querySelector('#clicou').classList.remove('clicou');
    document.querySelector('#testes--1').classList.add('bordas');

}

// <!-- USUÁRIO 3 -->
function bordas2(){
    document.querySelector('#testes').classList.remove('bordas');
    document.querySelector('#testes--1').classList.remove('bordas');
    document.querySelector('#clicou').classList.remove('clicou');
    document.querySelector('#testes--2').classList.add('bordas');

}

// <-- BUTTON -->
function clicou(){
   if(document.querySelector('#clicou').classList.contains('clicou')){
    document.querySelector('#clicou').classList.remove('clicou')
   }else{
    document.querySelector('#clicou').classList.add('clicou')
   }
}

