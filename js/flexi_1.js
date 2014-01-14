$(window).load(function(){  

	// Vimeo API nonsense
	var player = document.getElementById('player_1' ,'player_2');
	$f(player).addEvent('ready', ready);
	
	function addEvent(element, eventName, callback) {
	(element.addEventListener) ? element.addEventListener(eventName, callback, false) : element.attachEvent(eventName, callback, false);
	}
	
	function ready(player_id) {
	var froogaloop = $f(player_id);
	
	froogaloop.addEvent('play', function(data) {
	  $('.flexslider').flexslider("pause");
	});
	
	froogaloop.addEvent('pause', function(data) {
	  $('.flexslider').flexslider("play");
	});
	}
	
	
	// Call fitVid before FlexSlider initializes, so the proper initial height can be retrieved.
	$(".flexslider")
	.fitVids()
	.flexslider({
	  animation: "slide",
	  useCSS: false,
	  animationLoop: true,
	  smoothHeight: true,
	  video: true, 
	  controlNav: false, 
	  start: function(slider){$('body').removeClass('loading');},
	  before: function(slider){$f(player).api('pause');}
	});
	
});