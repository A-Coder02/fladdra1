
'use strict';
// Declare bindings;
let dropBtn = document.querySelector('.dropdown');
let dropBtnC = document.querySelector('.dropdown');

let dropList = document.querySelector('.nav-wrapper-item');
let dropListStyle = dropList.style;


const mediaQuery = window.matchMedia('(max-width: 768px)')


let overlay = document.querySelector('.dropdown-overlay');
const Over = function(){
	overlay.classList.remove('hidden');
}
let dropListLinks = document.querySelectorAll('.nav-list-item');


for(let i = 0; i < dropListLinks.length; i++){
	dropListLinks[i].addEventListener('click', () => {
		console.log(dropListLinks[i]);
		if(mediaQuery.matches){
			dropListStyle.width = '0px';
			dropAddReset();
		dropRemoveDropClick();
		}
		
		
	})
}


//Declare funtions;
const dropRemoveReset = () => dropBtn.classList.remove('dropdown-reset') ;

const dropAddReset = () => dropBtn.classList.add('dropdown-reset') ;

const dropRemoveDropClick = () => dropBtn.classList.remove('dropdown-click');

const dropAddDropClick = () => dropBtn.classList.add('dropdown-click');

//Declare High Order Functions;
const dropDownF = () =>{
	if(dropBtn.classList.contains('dropdown-reset','dropdown')) {
		dropRemoveReset();
		dropAddDropClick();
		dropListStyle.width = '200px';
		
	}
	else if(dropBtn.classList.contains('dropdown-click','dropdown')) {
		dropAddReset();
		dropRemoveDropClick();
		dropListStyle.width = '0px';
	}
	else if(dropBtn.classList.contains('dropdown-click')) {
		dropRemoveDropClick();
		dropListStyle.width = '0px';
	}
	else if(!dropBtn.classList.contains('dropdown-click')){
		dropBtn.classList.add('dropdown-click');
		dropListStyle.width = '200px';
	}
};
//Declare Event Listenrs;
dropBtn.addEventListener('click', dropDownF );
dropBtn.addEventListener('click', function(){
	console.log('hii')
} );


