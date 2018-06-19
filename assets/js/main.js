

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header');

		// dial animation 
		var $randomnbr = $('.nbr');
		var $timer= 10;
		var $it;
		var $data = 0;
		var index;
		var change;
		var letters = ["T", "H", "I", "N", "G", "S"];
		
		$randomnbr.each(function(){
			
		  change = Math.round(Math.random()*100);
		  $(this).attr('data-change', change);
		  
		});
		
		function random(){
		  return Math.round(Math.random()*9);
		};
		
		function select(){
		  return Math.round(Math.random()*$randomnbr.length+1);
		};
		
		function value(){
		  $('.nbr:nth-child('+select()+')').html(''+random()+'');
		  $('.nbr:nth-child('+select()+')').attr('data-number', $data);
		  $data++;
		  
		  $randomnbr.each(function(){
			  if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
				index = $('.ltr').index(this);
				$(this).html(letters[index]);
				$(this).removeClass('nbr');
			  }
		  });
		  
		};
		
		$it = setInterval(value, $timer);



	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			offset: function() { return $header.outerHeight() }
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	// Header.
		$window.on('resize', function() { $window.trigger('scroll'); });

		$body.scrollex({
			top:		'25vh',
			mode:		'top',
			enter:		function() { $header.addClass('alt'); },
			leave:		function() { $header.removeClass('alt'); }
		});

})(jQuery);