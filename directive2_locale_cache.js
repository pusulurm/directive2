define([
	'directive2/i18n/en_CA.json!',
	'directive2/i18n/en_US.json!',
	'directive2/i18n/fr_CA.json!',
	'angular'
	], function(en_CA, en_US, fr_CA, angular){
		var moduleName = 'directive2.i18n';
			angular.module(moduleName,['cacheModule']).
			run(['localizaationCache', function(cache){
				cache.put('dist/directive2/i18n/en_CA.json',en_CA);
				cache.put('dist/directive2/i18n/fr_CA.json',fr_CA);
				cache.put('dist/directive2/i18n/en_US.json',en_US);
			}])
	})