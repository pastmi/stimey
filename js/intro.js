
// Speed of the animation
var animationSpeed = 600;

// Type of easing to use; http://gsgd.co.uk/sandbox/jquery/easing/
var easing = "easeOutCubic";

// Variable to store the images we need to set as background
// which also includes some text and url's.
var photos = [ {
		"title" : "Hello",
		"cssclass" : "Aperture",
		"image" : "START.png",
		"text" : "The aim of the game Rocket Scientist is to build a spaceship to fulfill a mission to other planets. A spaceship can be built only by a person who is intelligent and good at different things. And you will be able to do it if you learn how to allocate your time correctly. ",
		"url" : 'http://www.sxc.hu/photo/1270466',
		"urltext" : 'View picture'
	},{
		"title" : "Living room",
		"cssclass" : "Aperture",
		"image" : "1.png",
		"text" : "In the left part of the screen you can see your progress, the amount of money, your state of health and mood.  Hope you remember that the researcher’s living conditions can influence their mood and health. Click the objects in the living room  to find out their cost and buy.",
		"url" : 'http://www.sxc.hu/photo/1270466',
		"urltext" : 'View picture'
	}, {
		"title" : "Rocket",
		"cssclass" : "Aperture",
		"image" : "2.png",
		"text" : "The rocket building moves you closer to the main aim but you won’t be a success without money and education! Click the rocket parts and invent!",
		"url" : 'http://en.wikipedia.org/wiki/Cloud',
		"urltext" : 'More info'
	}, {
		"title" : "Laboratory",
		"cssclass" : "Aperture",
		"image" : "3.png",
		"text" : "Your inventions will help you in the rocket designing. Remember to get some equipment for the laboratory! Click the equipment and buy them!",
		"url" : 'http://www.apple.com/keyboard/',
		"urltext" : 'Get it now'
	}, {
		"title" : "Study",
		"cssclass" : "Aperture",
		"image" : "4.png",
		"text" : "An ignorant person isn’t capable of designing a spaceship. Move forward, get better educational level and you will be able to do it! Click an avatar , choose suitable mode of education and study!",
		"url" : 'http://www.sxc.hu/photo/1339442',
		"urltext" : 'View picture'
	} ,
			  {
		"title" : "Work",
		"cssclass" : "Aperture",
		"image" : "5.png",
		"text" : "You can’t buy all the necessary things without money. Your job gives you money. You know that higher level of education makes feasible high salaries.",
		"url" : 'http://www.sxc.hu/photo/1339442',
		"urltext" : 'View picture'
	} ,
		{
		"title" : "Free time",
		"cssclass" : "Aperture",
		"image" : "6.png",
		"text" : "It’s impossible only to study and work. You should regularly have rest. The chosen type of rest affects your state of health and mood. You can’t achieve great results with bad health and mood.Trust yourself and you will succeed!",
		"url" : 'http://www.sxc.hu/photo/1339442',
		"urltext" : 'View picture'
	} ,
			  {
		"title" : "Exit",
		"cssclass" : "",
		"image" : "",
		"text" : "",
		"url" : '',
		"urltext" : ''
	}
];

// 0-based index to set which picture to show first
var activeIndex = 0;

$(function() {

	// Variable to store if the animation is playing or not
	var isAnimating = false;

	// Register keypress events on the whole document
//	$(document).keypress(function(e) {
//		if (!e.which && ((e.charCode || e.charCode === 0) ? e.charCode: e.keyCode)) {
//		    e.which = e.charCode || e.keyCode;
//		}
//		
//		var imageIndex = e.which - 49; // The number "1" returns the keycode 49. We need to retrieve the 0-based index.
//		startAnimation(imageIndex);
//	});

	// Add the navigation boxes
	$.template("navboxTemplate", "<div class='navbox ${cssclass}'><ul></ul><h2>${title}</h2><p>${text}</p><p class='bottom'></p></div>");
	$.tmpl("navboxTemplate", photos).appendTo("#navigationBoxes");

	// Add the navigation, based on the Photos
	// We can't use templating here, since we need the index + append events etc.
	var cache = [];
 	for(var i = 1; i < photos.length + 1; i++) {
		$("<a />")
			.html(i===8 ? photos[i-1].title : i)
			.data("index", i-1)
			.attr("title", photos[i-1].title)
			.click(	i===8 ? ()=>exit() : function() {showImage($(this))})
			.appendTo(
				$("<li />")
					.appendTo(".navbox ul")
			);
			
		// Preload the images
		// More info: http://engineeredweb.com/blog/09/12/preloading-images-jquery-and-javascript
		var cacheImage = $("<img />").attr("src", "img/" + photos[i-1]);
		cache.push(cacheImage);
	}
	
	// Set the correct "Active" classes to determine which navbox we're currently showing
	$(".navbox").each(function(index) {
		var parentIndex = index + 1;
		$("ul li a", this).each(function(index) {
			if(parentIndex == (index + 1)) {
				$(this).addClass("active");
			}
		});
	});
	
	// Hide all the navigation boxes, except the one from current index
	$(".navbox:not(:eq(" + activeIndex +"))").css('left', '-1450px');
	
	// Set the proper background image, based on the active index
	$("<div />")
		.css({ 'background-image' : "url(img/" + photos[activeIndex].image + ")" } )
		.prependTo("#pictureSlider");
	
	//
	// Shows an image and plays the animation
	//
	var showImage = function(docElem) {
		// Retrieve the index we need to use
		var imageIndex = docElem.data("index");
		
		startAnimation(imageIndex);
	};
	var exit = ()=>{
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
	
});