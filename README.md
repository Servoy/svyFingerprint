# svyFingerprint

Anonymously identify a browser based on a number of plugins and options.  

# Example Usage
```js

//Setup a callback function
/**
 * @param {Function} result
 * @param {String} components
 * @properties={typeid:24,uuid:"7C21BD16-D847-418C-90E2-9AE06F08C5CE"}
 */
function callback(result, components) {
	application.output('my unique hashId : ' +result);
	application.output('components used: ' +components);
}


//Then call the getFingerPrint function.  We can optionally pass in an object with some plugins disabled. 
var options = {excludeUserAgent: true } 
plugins.svyfingerprintFingerprint.getFingerPrint(callback,options);

});
```

### List of fingerprinting sources
1. UserAgent
2. Language
3. Color Depth
4. Screen Resolution
5. Timezone
6. Has session storage or not
7. Has local storage or not
8. Has indexed DB
9. Has IE specific 'AddBehavior'
10. Has open DB
11. CPU class
12. Platform
13. DoNotTrack or not
14. Full list of installed fonts (maintaining their order, which increases the entropy), implemented with Flash.
15. A list of installed fonts, detected with JS/CSS (side-channel technique) - can detect up to 500 installed fonts without flash
16. Canvas fingerprinting
17. WebGL fingerprinting
18. Plugins (IE included)
19. Is AdBlock installed or not
20. Has the user tampered with its languages <sup>[1](https://github.com/Valve/fingerprintjs2/wiki/Browser-tampering)</sup>
21. Has the user tampered with its screen resolution <sup>[1](https://github.com/Valve/fingerprintjs2/wiki/Browser-tampering)</sup>
22. Has the user tampered with its OS <sup>[1](https://github.com/Valve/fingerprintjs2/wiki/Browser-tampering)</sup>
23. Has the user tampered with its browser <sup>[1](https://github.com/Valve/fingerprintjs2/wiki/Browser-tampering)</sup>
24. Touch screen detection and capabilities
25. Pixel Ratio
26. System's total number of logical processors available to the user agent.
