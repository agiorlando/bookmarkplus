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
	(window.myBookmarklet = function() {
		$___.init();
	})();
})();