angular.module('svyfingerprintFingerprint', ['servoy']).factory("svyfingerprintFingerprint", function($services) {
		var scope = $services.getServiceScope('svyfingerprintFingerprint');
		return {
			/**
			 * Return a unique hash ID for the device
			 */
			getFingerPrint: function(callback) {
				alert('getting fingerprint');
				return 'hello'
				//				new Fingerprint2().get(callback);
			}
		}
	}).run(function($rootScope, $services) { })