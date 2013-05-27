var main = {

	init: function () {
		$('.bookmark input').change(main.updateUsageStatistics);
	},

	updateUsageStatistics: function () {
		// display correct bookmarklet
		if (this.checked) {
			$('.no_usage_statistics').css('display', 'none');
			$('.usage_statistics').css('display', 'block');
		} else {
			$('.no_usage_statistics').css('display', 'block');
			$('.usage_statistics').css('display', 'none');
		}
	}

};

$(document).ready(main.init);
