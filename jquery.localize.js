/*global jQuery*/
/*jslint browser:true*/

/**
 * jquery.localize.js
 * String externalization for jQuery
 *
 * Version 0.14
 *
 * Usage:
 *
 * See
 *
 * Xiaoxing Wang
 * xiaohwan@gmail.com
 *
 * Version History:
 * v0.10 Initial version, implemented basic features;
 * v0.11 Adding the feature of localize HTML fragment;
 * v0.13 Support loading remote resources; fix bugs;
 * v0.14 Fixed a bug that when value of substitutable variable is 0,
   it's replaced with an empty string instead.
 */
(function($) {
	var resources = {};
	var defaultLanguage = '';
	var attribute = '';
	function mergeResources(res) {
		for (var lang in res) {
			if (!resources[lang]) {
				resources[lang] = res[lang];
			} else {
				for (var key in res[lang]) {
					if (key) {
						resources[lang][key] = res[lang][key];
					}
				}
			}
		}
	}
	var ret = (function() {
		var f = {
			url: function(url) {
				if (url) {
					$.ajax({
						async: false,
						url: url,
						dataType: 'json',
						success: function(o) {
							mergeResources(o);
						},
						error: function(o) {
              alert(o);
						}
					});
				}
			},
			resources: mergeResources,
			defaultLanguage: function(lang) {
				defaultLanguage = lang;
			},
			attribute: function(attr) {
				attribute = attr;
			},
			all: function(opts) {
				$('[' + attribute.replace(':', '\\:') + ']').localize(opts);
			}
		};
		$.localize = function() {
			if (typeof arguments[0] == 'object') {
				for (var p in arguments[0]) {
					if (p) {
						f[p](arguments[0][p]);
					}
				}
			} else if (typeof arguments[0] == 'string') {
				f[arguments[0]](arguments[1]);
			}
			return this;
		};
		/**
   *
   */
		function localize(opts) {
			opts = opts || {};
			$(this).each(function() {
				var key = $(this).attr(attribute);
				$(this).html(key.localize(opts));
			});
			return this;
		}
		$.fn.localize = localize;
	})();

	String.prototype.localize = function(opts) {
		opts = opts || {};
		var lang = opts.language || defaultLanguage;
		if (!resources[lang]) {
			return this.toString();
		}
		var str = resources[lang][this] || this.toString();
		var subs = str.match(/\${[^}]*}/g);
		$(subs).each(function(index, sub) {
			var subKey = sub.match(/\${([^}]*)}/)[1];
			str = str.replace(sub, (opts.variables && '' + opts.variables[subKey]) || '');
		});
		return str;
	};
})(jQuery);

