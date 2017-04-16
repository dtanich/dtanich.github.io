// JavaScript Document
(function () {
   'use strict';
   // this function is strict...
	var link = document.querySelector(".popup-open");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

/*popup open*/
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

/*popup close */

close.addEventListener("click", function() {
	popup.classList.remove("modal-content-show");
	
});
	
	/*checkbox switch*/

	
	
	
	
	
}());
