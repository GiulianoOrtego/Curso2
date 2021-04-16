//const $btnMenu = document.getElementById('btn-menu');

const $btnMenu = document.querySelector('#btn-menu');
const $listItem = document.querySelector('#menu-list-item');
$btnMenu.addEventListener('click', function(){

    if ($listItem.style.display ==='flex'){
        $listItem.style.display ='none';    
        
    } else{
        $listItem.style.display ='flex';
        $listItem.style.height='100vh';
        $listItem.style.overflow='visible'
    }
})


