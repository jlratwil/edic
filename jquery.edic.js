/*!
 * jQuery Enable/Disable Input from Checkbox (EDIC) plugin
 * Version 0.0.1 (December 12, 2012)
 * @requires jQuery v1.3 or later
 *
 * Copyright (c) 2012 James Lloyd Atwil
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
;
(function($) {
	
	var changeStatus = function(jQ) {
		var affectedElements = $(jQ).data('affected-elements');
		if (!$(jQ).is(":checked")) {
			$(affectedElements).attr("disabled" , true);
		} else {
			$(affectedElements).removeAttr("disabled");
		}
	}

	$.fn.edic = function() {
		return $(this).each(function() {
			changeStatus(this);
			$(this).change(function() {
				changeStatus(this);
			});
		});
	};

})(jQuery);
