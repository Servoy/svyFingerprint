{
	"name": "svyfingerprint-fingerprint",
	"displayName": "fingerprint",
	"version": 1,
	"definition": "svyfingerprint/fingerprint/fingerprint.js",
	"libraries": 
	[
		{
			"name": "fingerprintLib.js",
			"version": "1.5.0",
			"url": "svyfingerprint/fingerprint/fingerprintLib.js",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		
	},

	"api": 
	{
		"getFingerPrint": 
		{
			"parameters": 
			[
				{
					"name": "callback",
					"type": "function",
					"optional": false
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		}
	}
}