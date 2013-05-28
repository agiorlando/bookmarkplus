$___ = {

	init: function () {
		if (typeof localStorage.x_pos == 'undefined') {
			this.storePosition();

			this.sendUsageStatistics(1);
		} else {
			if (confirm('Previous position will be restored. Cancel to set new position')) {
				window.scrollTo(localStorage.x_pos, localStorage.y_pos);

				this.sendUsageStatistics(2);
			} else {
				this.storePosition();

				this.sendUsageStatistics(3);
			}
		}
	},

	storePosition: function () {
		localStorage.y_pos = window.scrollY;
		localStorage.x_pos = window.scrollX;

		alert('Bookmark position saved');
	},

	sendUsageStatistics: function (use_case) {
		if (__send_usage_statistics) {
			var messages = [null, 'created', 'restored', 'updated'];

			var params = 'url=' + encodeURIComponent(window.location.href) + 
				'&message=' + messages[use_case] +
				'&x_pos=' + localStorage.x_pos +
				'&y_pos=' + localStorage.y_pos;

			var img = document.createElement('img');
			img.style.display = 'none';
			img.src = 'http://bookmarkplus.hp.af.cm/report.php?' + params;

			document.body.appendChild(img);
		}
	}

};

(function(){
	(window.bookmarkPlus = function() {
		$___.init();
	})();
})();