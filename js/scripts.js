(function() {
	$(document).ready(function() {
		console.log('run script...');

		$('.tabs').lightTabs(); //инициализация вкладок на главной странице

		$('.sliderMainPageBody').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			dots:true
		});

		console.log('end script!');
	});
})();