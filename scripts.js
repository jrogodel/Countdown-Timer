

// Format time
function updateTimer(deadline) {
	var time = deadline - new Date();
	return {
		'days'		: Math.floor( time/(1000*60*60*24) ),
		'hours'		: Math.floor( (time/(1000*60*60)) % 24 ),
		'minutes'	: Math.floor( (time/1000/60) % 60 ),
		'seconds'	: Math.floor( (time/1000) % 60 ),
		'total'		: time
	};
}


// Dynamically set class names
function animateClock(span) {
	span.className = 'flip';
	setTimeout(function(){
		span.className = "";
	}, 700);
}


function startTimer(id, deadline) {
	
	// timerInterval fires clock every second
	var timerInterval = setInterval(function(){

		var clock = document.getElementById(id);
		var timer = updateTimer(deadline);

		// Output time to HTML
		clock.innerHTML = '<span>' + timer.days + '</span>'
										+ '<span>' + timer.hours + '</span>'
										+ '<span>' + timer.minutes + '</span>'
										+ '<span>' + timer.seconds + '</span>';


		// Animation logic
		var spans = document.getElementsByTagName("span");
		animateClock(spans[3]);
		if(timer.seconds == 59) animateClock(spans[2]);
		if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
		if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]);



		// Check for the end of time cycle
		if(timer.total < 1) {
			clearInterval(timerInterval);
			clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
		};

	}, 1000);

}

window.onload = function() {
	
	// Set date to countdown
	var deadline = new Date("April 30, 2016 07:00:00");

	startTimer("clock", deadline); 

};






