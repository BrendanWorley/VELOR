"use strict"

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

	let smallframebottoms = document.querySelectorAll('.header__smallframebottomimg');
	if (smallframebottoms.length > 0) {
		for (let index = 0; index < smallframebottoms.length; index++) {
			const smallframebottom = smallframebottoms[index];
			smallframebottom.addEventListener('click', function(e) {
				smallframebottom.parentElement.classList.toggle('active');
			});
		}
	}
}else{
	document.body.classList.add('_pc');
}

// --------ДЕЛАЕМ ПЛАВНУЮ ПРОКРУТКУ------------------

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
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});

			e.preventDefault();
		}
	}
}
