/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A86D78F-19EC-41C2-A5D5-98505250F416"}
 */
var details = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1A21B0A9-E5A8-4C17-873D-65A384475145"}
 */
function onAction$getfingerprint(event) {
	plugins.svyfingerprintFingerprint.getFingerPrint(callback)
}

/**
 * @properties={typeid:24,uuid:"896EA855-CF18-40D2-84E3-7C36F4BCFE78"}
 */
function callback(result, components) {
	elements.hash.text = 'Hash ID : ' + result;
	details = '<b><u>Details</u></b><br>';
	for (var i = 0; i < components.length; i++) {
		details += components[i].key + ' : ' + components[i].value + '<br>';
	}
	
}
