"use strict"
/*-------------------ПОПРОБУЮ ИЗОЛИРОВАТЬ ПРОВЕРКУ СМАРТФОН-ПК -----------------------------
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

} else {
	document.body.classList.add('_pc');
}
*/
/*---------ТЕСТ---------------------------------------*/


//--------------- ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ НА РАЗРЕШЕНИЯХ БОЛЕЕ 768

const openMenu = document.querySelector('.header__burgericon');
const dropoutmenustatus = document.querySelector('.dropoutmenu');
if (openMenu) {
	openMenu.addEventListener("click", function(e) {
		dropoutmenustatus.classList.toggle('openstatus'); /*openMenu.classList.toggle('openstatus');*/
		/*document.body.classList.toggle('block');*/
	});
}


// --------ДЕЛАЕМ ПЛАВНУЮ ПРОКРУТКУ НА РАЗРЕШЕНИИ БОЛЕЕ 769------------------


const menuLinks = document.querySelectorAll('.dropoutmenu__item[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto))
		 {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__topstrip').offsetHeight;

			if (dropoutmenustatus.classList.contains('openstatus')) {
			dropoutmenustatus.classList.remove('openstatus'); 
			console.log(dropoutmenustatus);
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}
/*(openMenu.classList.contains('openstatus'))*/
/*openMenu.classList.remove('.openstatus');*/
/*document.body.classList.remove('.block');*/
/* ----------------ОТКРЫВАЕМ DROPOUTMENU SMALL------------*/

	const smallframebottomstatus = document.querySelector('.header__smallframebottom');
		if (smallframebottomstatus) {
			smallframebottomstatus.addEventListener("click", function(e) {
			dropoutmenustatus.classList.toggle('openstatus');/*smallframebottomstatus.classList.toggle('active');*/
	});
}

/*------------------------ДЕЛАЕМ ПРОКРУТКУ НА РАЗРЕШЕНИЯХ МЕНЕЕ 768 ------------*/

/*const smallframebottomstatus = document.querySelector('.header__smallframebottom');*/
const menuLinksmalls = document.querySelectorAll('.dropoutmenu__item__small[data-goto]');
if (menuLinksmalls.length > 0)  {
	menuLinksmalls.forEach(menuLinksmall => {
		menuLinksmall.addEventListener("click", onMenuLinkClicksmall);
	});

	function onMenuLinkClicksmall(e) {
		const menuLinksmall = e.target;
		if (menuLinksmall.dataset.goto && document.querySelector(menuLinksmall.dataset.goto))
		 {
			const gotoBlocksmall = document.querySelector(menuLinksmall.dataset.goto);
			const gotoBlockValuesmall = gotoBlocksmall.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__smallframetop').offsetHeight;

			if (smallframebottomstatus.classList.contains('active')) {
			smallframebottomstatus.classList.remove('.active');
			}
			window.scrollTo({
				top: gotoBlockValuesmall,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}