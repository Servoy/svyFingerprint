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

### List of fingerprinting options
1. swfContainerId - specifies the dom element ID to be used for swf embedding
2. swfPath - specifies the path to the FontList.swf
3. userDefinedFonts - specifies an array of user-defined fonts to increase font fingerprint entropy
4. excludeUserAgent - user agent should not take part in FP calculation (https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent)
5. excludeLanguage - browser language (https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language)
6. excludeColorDepth - color depth (https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth)
7. excludeScreenResolution - screen resolution
8. excludeAvailableScreenResolution
9. excludeTimezoneOffset - user time zone
10. excludeSessionStorage - user browser support of session storage
11. excludeIndexedDB - user browser support of IndexedDB
12. excludeAddBehavior - IE specific 'AddBehavior' method detection
13. excludeOpenDatabase - user browser support of OpenDatabase
14. excludeCpuClass - detection of CPU class
15. excludePlatform - detection of OS platform
16. excludeDoNotTrack - is DoNotTrack set
17. excludeCanvas - skip canvas fingerprinting entirely (you will most likely not need to set this to true)
18. excludeWebGL - skip WebGL fingerprinting
19. excludeAdBlock - skip AdBlock detection
20. excludeHasLiedLanguages - skip check if user is trying to hide his browser language
21. excludeHasLiedResolution - skip check if user is trying to hide his screen resolution
22. excludeHasLiedOs - skip check if user is trying to hide his OS info
23. excludeHasLiedBrowser - skip check if user is trying to hide his browser information
24. excludeJsFonts - skip font detection with CSS "side channel"
25. excludeFlashFonts - skip font detection with Flash (disabled by default)
26. excludePlugins - skip plugin enumeration/detection
27. excludeIEPlugins - skip IE plugin enumeration/detection
28. excludeTouchSupport - skip touch screen specific info fingerprinting
29. excludePixelRatio - skip device pixel ratio
30. excludeHardwareConcurrency - skip hardware concurrency
