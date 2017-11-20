

$(document).ready(function(){
	
	$('.collapsible').collapsible();

	$('.scrollspy').scrollSpy({
		scrollOffset: 80
    });
	

	$('.carousel').carousel();

	$('.parallax').parallax();

	$('.button-collapse').sideNav({
		menuWidth: 200,
		edge: 'left',
		closeOnClick: true,
		draggable: true,
		onOpen: function(el) {  },
		onClose: function(el) {  },
	});
	

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
	
	
	
  $(function() {
      //caches a jQuery object containing the header element
      var header = $("header");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 200) {
              header.removeClass('clearHeader').addClass("background");
          } else {
              header.removeClass("background").addClass('clearHeader');
          }
      });
  });
	
	
  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#ourHolder').children('div.item').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#ourHolder').children('div.' + ourClass).show();
    }
    return false;
  });

});



  $(function() {

    var chicago = new google.maps.LatLng(41.924832, -87.697456),
        pointToMoveTo,
        first = true,
        curMarker = new google.maps.Marker({}),
        $el;

    var myOptions = {
        zoom: 10,
        center: chicago,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    var map = new google.maps.Map($("#map_canvas")[0], myOptions);

    $("#locations li").click(function() {

      $el = $(this);

      if (!$el.hasClass("hover")) {

        $("#locations li").removeClass("hover");
        $el.addClass("hover");

        if (!first) {

          // Clear current marker
          curMarker.setMap();

          // Set zoom back to Chicago level
          // map.setZoom(10);
        }

        // Move (pan) map to new location
        pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
        map.panTo(pointToMoveTo);

        // Add new marker
        curMarker = new google.maps.Marker({
            position: pointToMoveTo,
            map: map,
            icon: "assets/map/images/marker.png"
        });

        // On click, zoom map
        google.maps.event.addListener(curMarker, 'click', function() {
           map.setZoom(20);
        });
        // No longer the first time through (re: marker clearing)
        first = false;
      }

    });

    $("#locations li:first").trigger("click");

  });



$('.hoverContent').each(function(){
     $(this).css('display', 'none');
});


$( ".hoverA" ).mouseover(function() {
    
	var id = $(this).attr('data-related');
    
	$('.hoverContent').each(function(){
		if($(this).attr('id') === id){
			$(this).css('display','block');
		}	
	});
	
  })
	.mouseout(function() {
    	$('.hoverContent').css('display','none');
});


/*$('.hoverContent').each(function(){
     $(this).css('display', 'none');
});


$('a').mouseover(function(){
	e.preventDefault();
    var id = $(this).attr('data-related');
	
	$('.hoverContent').each(function(){
		
		if($(this).attr('id') === id) {
			$(this).css('display', 'block');
		}
		
	});
	
});*/




$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.sets a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});

$('.sets a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.sets a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});



	/*ANALYTICS*/

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-103226387-1', 'auto');
	  ga('send', 'pageview');
