// Navbar changing color
$(document).ready(function() {
  if ($(window).scrollTop() > 2) {
      $('#header').removeClass('header-color0');
      $('#header').addClass('header-color100');
    }

    if ($(window).scrollTop() < 3) {
      $('#header').addClass('header-color0');
      $('#header').removeClass('header-color100');
    }
});

$(window).scroll(function () { 
  if ($(window).scrollTop() > 2) {
    $('#header').removeClass('header-color0');
    $('#header').addClass('header-color100');
  }

  if ($(window).scrollTop() < 3) {
    $('#header').addClass('header-color0');
    $('#header').removeClass('header-color100');
  }
});

// Progress bar function
function progressBar(elementId){
	const numb_html = document.getElementById(elementId);
	let counter_html = 0;
	setInterval(()=>{
		if (counter_html == numb_html.dataset.maxvalue){
			clearInterval();
		}else {
			counter_html+=1;
			numb_html.textContent = counter_html + "%";
		}
	}, 40);
};

  progressBar("percent-html");
  progressBar("percent-css");
  progressBar("percent-electronics");
  progressBar("percent-3dprinting");

// Navbar mobile
function mobileMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className == "topnav mobile") {
    x.className += " responsive";
  } else {
    x.className = "topnav mobile";
  }
};

