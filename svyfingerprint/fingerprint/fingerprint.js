angular.module('svyfingerprintFingerprint', ['servoy']).factory("svyfingerprintFingerprint", function($services, $window) {
		var scope = $services.getServiceScope('svyfingerprintFingerprint');
		return {
			/**
			 * returns a callback with hash result representing device and components used.
			 *	
			 * example of an option object
			 * options = {excludeUserAgent: false }
			 * full list of options at https://github.com/Servoy/svyFingerprint
			 * @param {Function} callback returns a callback function with two parameters (results and components)
			 * @param {Object} [options] specify which components you want to include in fingerprint calculation.
			 *
			 */
			getFingerPrint: function(callback, options) {
				new Fingerprint2(options).get(function(result, components) {
					return $window.executeInlineScript(callback.formname, callback.script, [result, components]);
				});
			}
		}
	}).run(function($rootScope, $services) { })
