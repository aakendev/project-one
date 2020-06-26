var menu = document.getElementById('hidden-menu');
var hide1 = document.getElementById('hidden-1');
var hide2 = document.getElementById('hidden-2');
var hide3 = document.getElementById('hidden-3');

function showmenu(){
	menu.style.display = "block";
}
function hidemenu(){
	menu.style.display = "none";
}
function showmenu1(){
	hide1.style.display = "block";
	hide2.style.display = "none";
	hide3.style.display = "none";
}
function showmenu2(){
	hide1.style.display = "none";
	hide2.style.display = "block";
	hide3.style.display = "none";
}
function showmenu3(){
	hide1.style.display = "none";
	hide2.style.display = "none";
	hide3.style.display = "block";
}

// Test Comment JS