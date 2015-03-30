var kscv = angular.module('kscv', []);

kscv.filter('lmao',  function() {
    return function(str) {
	return str + ' lmao';
    };
});
