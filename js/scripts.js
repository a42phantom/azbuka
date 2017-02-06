(function() {
	$(document).ready(function() {
		console.log('run script...');

		$('#mainPageTabs').tabs({
			active: 1
		}); //инициализация вкладок на главной странице
		$('#specialOffersTabs').tabs(); //инициализация вкладок в блоке спецпредложения
		$('#favorites').tabs(); //инициализация вкладок в блоке спецпредложения
		$('.objectTabs').tabs();

		//инициализация вертикального слайдера
		var container1 = $("#verticalSlider1");
		var track = container1.find(".slider-container").silverTrack({
			itemClass: "item", 
			perPage: 3,
			mode: "vertical",
			animationAxis: "y"
		});

		track.install(new SilverTrack.Plugins.Navigator({
			prev: $(".verticalSlider a.prev"),
			next: $(".verticalSlider a.next")
		}));
		track.start();

		var container2 = $("#verticalSlider2");
		var track = container2.find(".slider-container").silverTrack({
			itemClass: "item", 
			perPage: 2,
			mode: "vertical",
			animationAxis: "y"
		});

		track.install(new SilverTrack.Plugins.Navigator({
			prev: $(".verticalSlider a.prev"),
			next: $(".verticalSlider a.next")
		}));
		track.start();

		$('.sliderMainPageBody').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			dots:true
		});
		$('.objectSlider').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			dots:true
		});
		$('.vacHomeSlider').owlCarousel({
			loop:true,
			items:1,
			nav:true,
			navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
			dots:false
		});

		$( "#slider-range1" ).slider({
			range: true,
			min: 15,
			max: 105,
			values: [ 40, 60 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		/*$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );*/

		$( "#slider-range2" ).slider({
			range: true,
			min: 300,
			max: 17000,
			values: [ 1100, 3000 ],
			slide: function( event, ui ) {
				$( "#priceMin" ).val(ui.values[0]);
				$( "#priceMax" ).val(ui.values[1]);
			}
		});
		/*$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );*/

		$( "#slider-range3" ).slider({
			range: true,
			min: 0,
			max: 350,
			values: [ 100, 150 ],
			slide: function( event, ui ) {
				$( "#amount" ).val(ui.values[0]);
			}
		});
		/*$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );*/

		$( "#slider-range4" ).slider({
			range: true,
			min: 2016,
			max: 2021,
			values: [ 2017, 2018 ],
			slide: function( event, ui ) {
				$( "#amount" ).val(ui.values[0]);
			}
		});
		/*$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );*/

		$( "#slider-range5" ).slider({
			min: 300,
			max: 5500,
			step: 50,
			value: 900,
			slide: function( event, ui ) {
				$( "#amount5" ).val(ui.value);
			}
		});
		//$( "#amount5" ).val("#slider-range5").slider("values",0);

		$( "#slider-range6" ).slider({
			min: 5,
			max: 105,
			step:5,
			value: 20,
			slide: function( event, ui ) {
				$( "#amount6" ).val(ui.value);
			}
		});
		//$( "#amount6" ).val("#slider-range6").slider("values",0);

		$('.accordion').accordion({
			collapsible:true
		});

		$('.jqCheckbox').styler({});
		$('.uiCheckRadio input').checkboxradio();

		console.log('end script!');
	});
})();