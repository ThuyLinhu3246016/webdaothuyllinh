jQuery(window).scroll(function() {
				if (jQuery(this).scrollTop()>300)
				 {
					jQuery('.tovelos').show(700);
				 }
				else
				 {
				  jQuery('.tovelos').hide(700);
				 }
			 });
			 
			jQuery("a[href='#top']").click(function() {
			  jQuery("html, body").animate({ scrollTop: 0 }, "slow");
			  return false;
});
jQuery('.toggle,.toggle2').click(function() {
   jQuery('.toggle').toggleClass('active');
   jQuery('#overlay').toggleClass('open');
  });
  
  jQuery('.parent-li').on("mouseenter", function() {
  jQuery(this).children('ul').show();
});

jQuery('.parent-li').on("mouseleave", function() {
  jQuery(this).children('ul').hide(); 
});
