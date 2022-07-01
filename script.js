<<<<<<< HEAD
"use strict"

/* ------------------- УПРАВЛЯЕМ LAUNCHER-ОМ --------------------*/
const launcher = document.getElementById('launcher');
const launchButton = document.querySelector('.launchButton');
console.log(launchButton);

launchButton.addEventListener("click", launchPage);

function launchPage() {
	launcher.style.visibility = "hidden";
}
/*--------------------------------------------------------------*/

/*----------АЛЬТЕРНАТИВНЫЙ ЗАПУСК ЗВУКА ПО СКРОЛЛУ---------*/
window.addEventListener('scroll', onscrollPlay);
window.addEventListener('wheel', onscrollPlay);

function onscrollPlay() {

	mediaSource.classList.toggle('playing');
	if (mediaSource.classList.contains('playing') && !mediaSource.muted) {
		mediaSource.play();
		soundClick.textContent = 'Выключить звук';
	}
	/*window.removeEventListener('scroll', onscrollPlay);*/



}
/*-------------------------------------------------------*/

/* -------------ЗДЕСЬ ВСТАВЛЯЕМ ФУНКЦИЮ ЗАПУСКА ЗВУКА--------------*/
const soundClick = document.getElementById('turnon');
const mediaSource = document.querySelector('.miles');


soundClick.addEventListener("click", soundOnOff)

function soundOnOff() {
	mediaSource.classList.toggle('playing');
	if (mediaSource.classList.contains('playing')) {
		soundClick.textContent = 'Выключить звук';
		mediaSource.play();
		mediaSource.muted = false;
	}
	else {
		soundClick.textContent = 'Включить звук';
		/*mediaSource.pause();*/
		mediaSource.muted = true;
		console.log(mediaSource.muted);
	}
}
/*---------------------------------------------------------------*/


/* - ЗАРЕЗЕРВИРОВАЛ КАК РАБОЧИЙ БЛОК
const playMusic = document.getElementById("turnon");
const mp3Source = document.querySelector(".miles");
	playMusic.addEventListener("click", function(e) {
		mp3Source.play();
		playMusic.textContent = 'Звук проигрывается (для выключения обновите страницу)';
});*/



//--------------- ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ НА РАЗРЕШЕНИЯХ БОЛЕЕ 768

const openMenu = document.querySelector('.header__burgericon');
const dropoutmenustatus = document.querySelector('.dropoutmenu');
const videooverlay = document.querySelector('.hesgorgeous__video__clip') /*testing*/
if (openMenu) {
	openMenu.addEventListener("click", function () {
		showArrows.style.visibility = 'hidden';
		showArrows1.style.visibility = 'hidden';
		dropoutmenustatus.classList.toggle('openstatus'); /*openMenu.classList.toggle('openstatus');*/
		document.body.classList.toggle('block');
		videooverlay.classList.add('musthide');/*testing*/
		scrollCheck();
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
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__topstrip').offsetHeight;

			if (dropoutmenustatus.classList.contains('openstatus')) {
				dropoutmenustatus.classList.remove('openstatus');
				document.body.classList.remove('block');
				videooverlay.classList.remove('musthide'); /*testing*/
				showArrows.style.visibility = 'hidden';

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

/* ----------------ОТКРЫВАЕМ DROPOUTMENU SMALL------------*/

const smallframebottomstatus = document.querySelector('.header__smallframebottom');
if (smallframebottomstatus) {
	smallframebottomstatus.addEventListener("click", function () {
		showArrows.style.visibility = 'hidden';
		showArrows1.style.visibility = 'hidden';
		scrollCheck();
		dropoutmenustatus.classList.toggle('openstatus');/*smallframebottomstatus.classList.toggle('active');*/
		document.body.classList.toggle('block');
		videooverlay.classList.add('musthide');/*testing*/

	})
}


/* - ВРЕМЕННО ОТКЛЮЧАЮ ЧТОБЫ ПРОВЕРИТЬ РАБОТАЕТ ЛИ ОРНАМЕНТ ПРИ ОТКРЫТИИ МЕНЮ НА МАЛОМ РАЗРЕШЕНИИ-----*/

/*--------------ДЕЛАЕМ АЛЬЕРНАТИВНЫЙ SCROLLBAR -----------------*/
const scrollingList = document.querySelector('.dropoutmenu__list');
const firstItem = document.getElementById('firstItem');
const lastItem = document.getElementById('credits');
const showArrows = document.querySelector('.dropoutmenu__container__twinarrows_up');
const showArrows1 = document.querySelector('.dropoutmenu__container__twinarrows_down');

scrollingList.addEventListener("scroll", scrollCheck);

function scrollCheck() {
	showArrows.style.visibility = 'hidden';
	showArrows1.style.visibility = 'hidden';
	if (scrollingList.scrollTop >= firstItem.clientHeight / 2) {
		showArrows.style.visibility = 'visible';
	}
	if ((scrollingList.scrollHeight - scrollingList.clientHeight - scrollingList.scrollTop) >= (lastItem.clientHeight) * 0.3) {
		showArrows1.style.visibility = 'visible';
	}


}
/*const dropoutmenuList = document.querySelector('.dropoutmenu__list');
const dropoutmenuOuter = document.querySelector('.dropoutmenu');
const dropoutmenuRect = dropoutmenuOuter.getBoundingClientRect().top;
console.log(dropoutmenuRect);
const firstItem = document.querySelector('.music');
const firstItemRect = firstItem.getBoundingClientRect().top;
console.log(firstItemRect);
const showArrows = document.querySelector('.dropoutmenu__container__twinarrows_up');
const showArrows1 = document.querySelector('.dropoutmenu__container__twinarrows_down');

function scrollCheck() {
	if (dropoutmenuList.scrollHeight > dropoutmenuOuter.scrollHeight) {
		showArrows.style.visibility = 'visible';
		showArrows1.style.visibility = 'visible';
	}

}*/
/*-------------------------------------------------------------*/




/*------------------------ДЕЛАЕМ ПРОКРУТКУ НА РАЗРЕШЕНИЯХ МЕНЕЕ 768 ------------*/

/*const smallframebottomstatus = document.querySelector('.header__smallframebottom');*/
/*const menuLinksmalls = document.querySelectorAll('.dropoutmenu__item__small[data-goto]');
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
=======
"use strict"
/* -------------ЗДЕСЬ ВСТАВЛЯЕМ ФУНКЦИЮ ЗАПУСКА ЗВУКА--------------*/
const soundClick = document.getElementById('turnon');
const mediaSource = document.querySelector('.miles');


soundClick.addEventListener("click", soundOnOff)

function soundOnOff() {
mediaSource.classList.toggle('playing');
if (mediaSource.classList.contains('playing')) {
	soundClick.textContent = 'Выключить звук';
	mediaSource.play();}
else {
	soundClick.textContent = 'Включить звук';
	mediaSource.pause();
}
}
/*---------------------------------------------------------------*/


/* - ЗАРЕЗЕРВИРОВАЛ КАК РАБОЧИЙ БЛОК
const playMusic = document.getElementById("turnon");
const mp3Source = document.querySelector(".miles");
	playMusic.addEventListener("click", function(e) {
		mp3Source.play();
		playMusic.textContent = 'Звук проигрывается (для выключения обновите страницу)';
});*/



//--------------- ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ НА РАЗРЕШЕНИЯХ БОЛЕЕ 768

const openMenu = document.querySelector('.header__burgericon');
const dropoutmenustatus = document.querySelector('.dropoutmenu');
const videooverlay = document.querySelector('.hesgorgeous__video__clip') /*testing*/
if (openMenu) {
	openMenu.addEventListener("click", function(e) {
		dropoutmenustatus.classList.toggle('openstatus'); /*openMenu.classList.toggle('openstatus');*/
		document.body.classList.toggle('block');
		videooverlay.classList.add('musthide');/*testing*/
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
			document.body.classList.remove('block');
			videooverlay.classList.remove('musthide'); /*testing*/
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

/* ----------------ОТКРЫВАЕМ DROPOUTMENU SMALL------------*/

	const smallframebottomstatus = document.querySelector('.header__smallframebottom');
		if (smallframebottomstatus) {
			smallframebottomstatus.addEventListener("click", function(e) {
			dropoutmenustatus.classList.toggle('openstatus');/*smallframebottomstatus.classList.toggle('active');*/
			document.body.classList.toggle('block');
			videooverlay.classList.add('musthide');/*testing*/
	});
}

/*------------------------ДЕЛАЕМ ПРОКРУТКУ НА РАЗРЕШЕНИЯХ МЕНЕЕ 768 ------------*/

/*const smallframebottomstatus = document.querySelector('.header__smallframebottom');*/
/*const menuLinksmalls = document.querySelectorAll('.dropoutmenu__item__small[data-goto]');
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
>>>>>>> 8261c2e74638de7fcc5d0174eb2153956ff89ffc
}*/