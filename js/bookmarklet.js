$___ = {

	init: function () {
		if (typeof localStorage.xPos == 'undefined') {
			this.storePosition();

			this.sendUsageStatistics(1);
		} else {
			if (confirm('Previous position will be restored. Cancel to set new position')) {
				window.scrollTo(localStorage.xPos, localStorage.yPos);

				this.sendUsageStatistics(2);
			} else {
				this.storePosition();

				this.sendUsageStatistics(3);
			}
		}
	},

	storePosition: function () {
		localStorage.yPos = window.scrollY;
		localStorage.xPos = window.scrollX;

		alert('Bookmark position saved');
	},

	sendUsageStatistics: function (use_case) {
		if (__send_usage_statistics) {
			var message = '';

			switch (use_case) {
				case 1:
					message = 'updated';
				break;

				case 2:
					message = 'restored';
				break;

				case 3:
					message = 'updated';
				break;
			}

			var params = '?url=' + encodeURIComponent(window.location.href) + '&message=' + message + '&xPos=' + localStorage.xPos + '&yPos=' + localStorage.yPos;
			var img = document.createElement('img');
			img.style.display = 'none';
			img.src = 'http://bookmarkplus.hp.af.cm/report.php' + params;
			document.body.appendChild(img);
		}
	}

};

(function(){
	(window.myBookmarklet = function() {
		$___.init();
	})();
})();