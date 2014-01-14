jQuery(document).ready(function() {
    
	// ==== PORTFOLIO FILTER ==== //
	jQuery('.portfolio_filter a').click(function(){
            var selector = jQuery(this).attr('data-filter');
            jQuery('#portfolioisotope').isotope({ filter: selector });
            return false;
     });
	 // ==== PORTFOLIO FILTER ==== //
	
});

jQuery(window).load(function() {
	
	// ==== MASONRY ==== //
	jQuery('#portfolioisotope').isotope({
		animationOptions: {
		  duration: 750
		},
		animationEngine : 'best-available',
		itemSelector: '#portfolioisotope li'
	});
	// ==== MASONRY ==== //
	
});