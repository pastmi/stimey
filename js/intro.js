var animationSpeed = 600;
var easing = "easeOutCubic";
document.querySelector(".help").addEventListener('click',()=> {
document.querySelector("#intro").style.display = "block";

});
var activeIndex = 0;
let introStart =  (lang)=> {
	Promise.resolve()
		.then(() => {
		return $.getJSON("/lang/"+lang+".json");
	})
		.then(inf => {
		var photos = [ {
			"title" : inf['intro1'][0],
			"cssclass" : "Aperture",
			"image" : "STA.png",
			"text" : inf['intro1'][1],
			"url" : 'http://www.sxc.hu/photo/1270466',
			"urltext" : 'View picture'
		},{
			"title" : inf['intro2'][0],
			"cssclass" : "Aperture",
			"image" : "1.png",
			"text" : inf['intro2'][1],
			"url" : 'http://www.sxc.hu/photo/1270466',
			"urltext" : 'View picture'
		}, {
			"title" : inf['intro3'][0],
			"cssclass" : "Aperture",
			"image" : "2.png",
			"text" : inf['intro3'][1],
			"url" : 'http://en.wikipedia.org/wiki/Cloud',
			"urltext" : 'More info'
		}, {
			"title" : inf['intro4'][0],
			"cssclass" : "Aperture",
			"image" : "3.png",
			"text" : inf['intro4'][1],
			"url" : 'http://www.apple.com/keyboard/',
			"urltext" : 'Get it now'
		}, {
			"title" : inf['intro5'][0],
			"cssclass" : "Aperture",
			"image" : "4.png",
			"text" : inf['intro5'][1],
			"url" : 'http://www.sxc.hu/photo/1339442',
			"urltext" : 'View picture'
		} ,  {
			"title" : inf['intro6'][0],
			"cssclass" : "Aperture",
			"image" : "5.png",
			"text" : inf['intro6'][1],
			"url" : 'http://www.sxc.hu/photo/1339442',
			"urltext" : 'View picture'
		} ,  {
			"title" : inf['intro7'][0],
			"cssclass" : "Aperture",
			"image" : "6.png",
			"text" : inf['intro7'][1],
			"url" : 'http://www.sxc.hu/photo/1339442',
			"urltext" : 'View picture'
		} ,  {
			"title" : inf['intro8'][0],
			"cssclass" : "",
			"image" : "",
			"text" : "",
			"url" : '',
			"urltext" : ''
		}
					 ];
		start(photos)
		
	});
}
let start = (photos)=> {
	var isAnimating = false;


	$.template("navboxTemplate", "<div class='navbox ${cssclass}'><ul></ul><h2>${title}</h2><p>${text}</p><p class='bottom'></p></div>");
	$.tmpl("navboxTemplate", photos).appendTo("#navigationBoxes");


	var cache = [];
	for(var i = 1; i < photos.length + 1; i++) {
		
		$("<a />")
			.html(i===8 ? photos[i-1].title : i)
			.data("index", i-1)
			.attr("title", photos[i-1].title)
			.click(	i===8 ? ()=>exit() : function() {
				showImage($(this))
			 musicPlay('click');
			})
			.appendTo(
			$("<li />")
			.appendTo(".navbox ul")
		);


		var cacheImage = $("<img />").attr("src", "img/" + photos[i-1]);
		cache.push(cacheImage);
	}


	$(".navbox").each(function(index) {
		var parentIndex = index + 1;
		$("ul li a", this).each(function(index) {
			if(parentIndex == (index + 1)) {
				$(this).addClass("active");
			}
		});
	});


	$(".navbox:not(:eq(" + activeIndex +"))").css('left', '-1450px');


	$("<div />")
		.css({ 'background-image' : "url(img/" + photos[activeIndex].image + ")" } )
		.prependTo("#pictureSlider");


	var showImage = function(docElem) {

		var imageIndex = docElem.data("index");

		startAnimation(imageIndex);
	};
	var exit = ()=>{
		musicPlay('click');
		document.querySelector('#intro').style.display = 'none';
	}

	//
	// Starts the animation, based on the image index
	//
	var startAnimation = function(imageIndex) {
		// If the same number has been chosen, or the index is outside the
		// photos range, or we're already animating, do nothing
		if(activeIndex == imageIndex ||
		   imageIndex > photos.length - 1 ||
		   imageIndex < 0 ||
		   isAnimating) {
			return;
		}

		isAnimating = true;
		animateNavigationBox(imageIndex);
		slideBackgroundPhoto(imageIndex);

		// Set the active index to the used image index
		activeIndex = imageIndex;		
	};

	//
	// Animate the navigation box
	//
	var animateNavigationBox = function(imageIndex) {

		// Hide the current navigation box
		$(".navbox").eq(activeIndex)
			.css({ 'z-index' : '998' }) // Push back
			.animate({ left : '-1450px' }, animationSpeed, easing);

		// Show the accompanying navigation box
		$(".navbox").eq(imageIndex)
			.css({ 'z-index' : '999' }) // Push forward
			.animate({ left : '0px' }, animationSpeed, easing);
	};

	//
	// Slides the background photos
	//
	var slideBackgroundPhoto = function(imageIndex) {
		// Retrieve the accompanying photo based on the index
		var photo = photos[imageIndex];

		// Create a new div and apply the CSS
		$("<div />")
			.css(
			{ 	'left' : '-2000px',
			 'background-image' : "url(img/" + photo.image + ")" } )
			.addClass(photo.cssclass)
			.prependTo("#pictureSlider");

		// Slide all the pictures to the right
		$("#pictureSlider div").animate({ left : '+=2000px' }, animationSpeed, easing, function() {
			// Remove any picture that is currently outside the screen, only the first is visible
			$("#pictureSlider div:not(:first)").remove();

			// Animation is complete
			isAnimating = false;
		});
	};

}