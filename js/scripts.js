(function() {
	$(document).ready(function() {
		console.log('run script...');

		$('#mainPageTabs').tabs(); //инициализация вкладок на главной странице
		$('#specialOffersTabs').tabs(); //инициализация вкладок в блоке спецпредложения
		$('#favorites').tabs(); //инициализация вкладок в блоке спецпредложения

		$('.sliderMainPageBody').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			dots:true
		});

		$('.accordion').accordion({
			collapsible:true
		});

		$('input').styler({});

		console.log('end script!');
	});
})();