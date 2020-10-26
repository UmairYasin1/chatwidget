
//document.write('<link href="'+ link +'assets/css/fonts.css" rel="stylesheet" async>');
//document.write('<link href="'+ link +'assets/css/style.css" rel="stylesheet" async>');
//document.write('<link href="'+ link +'assets/css/font-awesome.min.css" rel="stylesheet prefetch" async>');
//document.write('<link href="'+ link +'assets/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" async>');
document.write('<script src="'+ link +'assets/js/bootstrap.min.js" async></scr'+'ipt>');
document.write('<script src="'+ link +'assets/js/jquery.min.js" async></scr'+'ipt>');
// document.write('<link href="'+ link +'assets/css/bootstrap2.min.css" rel="stylesheet" id="bootstrap-css" async>');
document.write('<script src="'+ link +'assets/js/bootstrap2.min.js" async></scr'+'ipt>');
document.write('<script src="'+ link +'assets/js/jquery-1.11.1.min.js" async></scr'+'ipt>');
document.write('<script src="'+ link +'assets/js/jquery-2.2.4.min.js" async></scr'+'ipt>');

var link = "https://chat-widget-2.glitch.me/";

$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

function newMessage() {
	message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="replies"><img src="'+link+'assets/images/userimg.jpg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$('.submit').click(function() {
  newMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});
$(document).on("click",".minimizeChat2",function(){
  
  $("#frame").toggleClass('active');
  
  $(".fa-window-minimize").toggleClass("fa-window-restore");
});
