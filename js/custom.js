jQuery(document).ready(function() {
	
	jQuery('.maincontainer').delay(1500).animate({marginLeft: 'auto'} , 1000);
	
	jQuery('.tools').live('click', function(){
		jQuery('.twrap').slideDown();
	});
	
	jQuery('.twrap').mouseleave(function(){
		jQuery('.twrap').slideUp();
	});
	
	jQuery('.twrap ul li img.changethebackground').live('click',function(){
		var b = jQuery(this).attr('data-bgimage');
		jQuery('.mainbg').attr('class', 'mainbg background' + b);
	});
	
	jQuery('.twrap ul li img.changethecolourscheme').live('click',function(){
		var c = jQuery(this).attr('data-colourscheme');
		jQuery('#changestylesheet').attr('href','css/ColourThemes/' + c + '.css');
		jQuery('.logo img').attr('src','images/logo' + c + '.jpg');
	});
	
	// ==== ERROR REPORTING ==== //
	jQuery('.x').live('click', function(){
		jQuery(this).parent().fadeOut();	
	});
	// ==== ERROR REPORTING ==== //

	// ==== NAVIGATION DROPDOWN ==== //
    jQuery('.nav li').live("mouseenter mouseleave", function(event){
		if (event.type == 'mouseenter') {jQuery(this).children('ul').fadeIn(300);
		} else {jQuery(this).children('ul').fadeOut(300);}
	});
	// ==== NAVIGATION DROPDOWN ==== //
	
	// ==== NAVIGATION ==== //
	jQuery('.nav').each(function() {
		var menu = jQuery(this);
		var sel = jQuery("<select />").appendTo(menu);
		jQuery("<option />", {
			"selected": "selected",
			"value": "",
			"text": "Navigation Menu"
		}).appendTo(sel);
		menu.find('li a').each(function() {
			jQuery("<option />", {
				"value": jQuery(this).attr("href"),
				"text": jQuery(this).text()
			}).appendTo(sel);
		});
		sel.change(function() {
			window.location = jQuery(this).val();
		});
	});
	// ==== NAVIGATION ==== //
	
	// ==== PAGINATION ==== //
	jQuery('.pagination').each(function() {
		var menu = jQuery(this);
		var sel = jQuery("<select />").appendTo(menu);
		jQuery("<option />", {
			"selected": "selected",
			"value": "",
			"text": "Pagination"
		}).appendTo(sel);
		menu.find('li a').each(function() {
			jQuery("<option />", {
				"value": jQuery(this).attr("href"),
				"text": jQuery(this).text()
			}).appendTo(sel);
		});
		sel.change(function() {
			window.location = jQuery(this).val();
		});
	});
	// ==== PAGINATIONs ==== //
	
	// ==== FANCYBOX SECTION ==== //
	jQuery("a.fancyboxnumber").fancybox({
		'titlePosition'		: 'outside',
		'overlayColor'		: '#000000',
		'overlayOpacity'	: 0.7
	});
	// ==== FANCYBOX SECTION ==== //
	
	 // ==== TABS SECTION ==== //
	jQuery('.tab').click(function () {
		jQuery('.tabs_container > .tabs > li.active').removeClass('active');
		jQuery(this).parent().slideDown('slow').addClass('active');
		jQuery('.tabs_container > .tab_contents_container > div.tab_contents_active').slideUp('slow').removeClass('tab_contents_active');
		var getdata = jQuery(this).attr('data-tab');
		jQuery(getdata).slideDown('slow').addClass('tab_contents_active');
	});
	// ==== TABS SECTION ==== //
	
	// ==== ACCORDION SECTION ==== //
	jQuery('.accordionwrap .accordioncontent').hide();
	jQuery('.accordionwrap .accordiontitle:first-child').addClass('active').next().show();
	
	jQuery('.accordionwrap .accordiontitle').click(function() {
		if(jQuery(this).next().is(':hidden')) {
			jQuery(this).parent().find(".accordiontitle").removeClass('active').next().slideUp('fast');
			jQuery(this).toggleClass('active').next().slideDown('fast');
		}
		return false;
	});
	// ==== ACCORDION SECTION ==== //
	
	// ==== DROPDOWN SLIDE ==== //
	jQuery('.plus a').live('click', function(){jQuery('.dropdown_wrap').slideDown();});
	jQuery('.dropdown_close').live('click', function(){jQuery('.dropdown_wrap').slideUp();});
	// ==== DROPDOWN SLIDE ==== //
	
	// ==== BACK TO TOP BUTTON ==== //
	jQuery(window).bind('scroll', function(){
		if(jQuery(this).scrollTop() > 200) {
		jQuery(".backtotop").fadeIn('3000');
		}
		if(jQuery(this).scrollTop() < 199){
			jQuery(".backtotop").fadeOut('3000');
		}
	});
	
	jQuery('.backtotop').live('click', function(){
		jQuery("html, body").animate({scrollTop:0}, 'slow');
	});
	// ==== BACK TO TOP BUTTON ==== //

	// ==== CAROUSELS SECTION ==== //
	(function() {

		var itemscroll = jQuery('.latestblog_carousel');
		if( itemscroll.length ) {

			var howmany;
			function gettheWidth() {

				if( jQuery(window).width() < 480 ) {howmany = 1;
				} else if( jQuery(window).width() < 768 ) {howmany = 2;
				} else if( jQuery(window).width() < 960 ) {howmany = 3;
				} else {howmany = 4;}

			}

			function initscrollitems( carousels ) {

				carousels.each(function() {

					var thisvar  = jQuery(this);

					thisvar.jcarousel({
						scroll              : howmany,
						itemVisibleInCallback : function() {
							onBeforeAnimation : resescrollitems( thisvar );
							onAfterAnimation : resescrollitems( thisvar );
						},
						auto                : ( thisvar.data('auto') ? parseInt( thisvar.data('auto') ) : 0 ),
						wrap                : ( thisvar.data('auto') ? 'both' : null )
					});

				});

			}

			function adjustscrollitems() {

				itemscroll.each(function() {

					var thisvar    = jQuery(this),
						lilists     = thisvar.children('li')
						newWidth = lilists.length * lilists.first().outerWidth( true ) + 100;

					gettheWidth();
					if( thisvar.width() !== newWidth) {thisvar.css('width',newWidth).data('resize','true');initscrollitems( thisvar );thisvar.jcarousel('scroll', 1);
						var timer = window.setTimeout( function() {window.clearTimeout( timer );thisvar.data('resize', null);}, 600 );
					}

				});

			}

			function resescrollitems( elem, resizeEvent ) {if( elem.data('resize') ){elem.css('left', '0');}}

			gettheWidth();
			initscrollitems( itemscroll );
			jQuery(window).on('resize', function() {var timer = window.setTimeout( function() {window.clearTimeout( timer );adjustscrollitems();}, 30 );});

		}

	})();
	// ==== CAROUSELS SECTION ==== //
	
	// ==== FLICKR FEED SECTION ==== //
	jQuery("#flickr").jflickrfeed({
			limit: 16,
			qstrings: {
				id: '52617155@N08'
			},
			itemTemplate: '<li><a href="{{image_b}}" rel="prettyPhoto[pp_gal]"><img class="flickr" src="{{image_s}}" alt="{{title}}" width="45" height="45"></a></li>'
		}, function(data) {
	});		
	// ==== FLICKR FEED SECTION ==== //
	
	// ==== TWITTER FEED SECTION ==== //
	jQuery(function(){
		jQuery(".twitterbody").tweet({
		  join_text: "auto",
		  username: "UBLDesigns",
		  avatar_size: 48,
		  count: 3,
		  auto_join_text_default: "we said,",
		  auto_join_text_ed: "we",
		  auto_join_text_ing: "we were",
		  auto_join_text_reply: "we replied",
		  auto_join_text_url: "we were checking out",
		  loading_text: "loading tweets..."
		});
	});
	// ==== TWITTER FEED SECTION ==== //

});