$___ = {

	init: function () {
		if (typeof localStorage.xPos == 'undefined') {
			this.storePosition();
		} else {
			if (confirm('Previous position will be restored. Cancel to set new position')) {
				window.scrollTo(localStorage.xPos, localStorage.yPos);
			} else {
				this.storePosition();
			}
		}
	},

	storePosition: function () {
		localStorage.yPos = window.scrollY;
		localStorage.xPos = window.scrollX;

		alert('Bookmark position saved');
	}

};

(function(){

	// the minimum version of jQuery we want
	var v = "1.3.2";

	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			$___.init();
		})();
	}

})();