!function(){$(document).ready(function(){console.log("run script..."),$("#mainPageTabs").tabs({active:1}),$("#specialOffersTabs").tabs(),$("#favorites").tabs(),$(".objectTabs").tabs();var a=$("#verticalSlider1"),e=a.find(".slider-container").silverTrack({itemClass:"item",perPage:3,mode:"vertical",animationAxis:"y"});e.install(new SilverTrack.Plugins.Navigator({prev:$(".verticalSlider a.prev"),next:$(".verticalSlider a.next")})),e.start();var l=$("#verticalSlider2"),e=l.find(".slider-container").silverTrack({itemClass:"item",perPage:2,mode:"vertical",animationAxis:"y"});e.install(new SilverTrack.Plugins.Navigator({prev:$(".verticalSlider a.prev"),next:$(".verticalSlider a.next")})),e.start(),$(".sliderMainPageBody").owlCarousel({loop:!0,items:1,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!0}),$(".objectSlider").owlCarousel({loop:!0,items:1,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!0}),$(".vacHomeSlider").owlCarousel({loop:!0,items:1,nav:!0,navText:["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],dots:!1}),$("#slider-range1").slider({range:!0,min:15,max:105,values:[40,60],slide:function(a,e){$("#amount").val("$"+e.values[0]+" - $"+e.values[1])}}),$("#slider-range2").slider({range:!0,min:300,max:17e3,values:[1100,3e3],slide:function(a,e){$("#priceMin").val(e.values[0]),$("#priceMax").val(e.values[1])}}),$("#slider-range3").slider({range:!0,min:0,max:350,values:[100,150],slide:function(a,e){$("#amount").val(e.values[0])}}),$("#slider-range4").slider({range:!0,min:2016,max:2021,values:[2017,2018],slide:function(a,e){$("#amount").val(e.values[0])}}),$("#slider-range5").slider({min:300,max:5500,step:50,value:900,slide:function(a,e){$("#amount5").val(e.value)}}),$("#slider-range6").slider({min:5,max:105,step:5,value:20,slide:function(a,e){$("#amount6").val(e.value)}}),$(".accordion").accordion({collapsible:!0}),$(".jqCheckbox").styler({}),$(".uiCheckRadio input").checkboxradio(),console.log("end script!")})}();