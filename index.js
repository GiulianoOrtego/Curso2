//const $btnMenu = document.getElementById('btn-menu');

const $btnMenu = document.querySelector('#btn-menu');
const $listItem = document.querySelector('#menu-list-item');
const $close = document.querySelector('.close');

$btnMenu.addEventListener('click', function(){
    $listItem.style.marginRight='0';
    console.log('si');
})

$close.addEventListener('click', function(){
    $listItem.style.marginRight='-1000px';
})
