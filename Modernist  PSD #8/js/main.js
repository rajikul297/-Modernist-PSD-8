$(document).ready(function(){
	
//	sticky menu
	
$(".js_sticky").waypoint(function(direction){
	if(direction == "down"){
		$("#main_menu").addClass("sticky");
	} else{
		$("#main_menu").removeClass("sticky");
	}
});
});

//mobile menu
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
