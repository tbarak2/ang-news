'use strict';

app.filter('hostnameFromUrl', function () {
  return function (str) {
    var url = document.createElement('a');
    url.href = str;
	//console.debug('in url' + str);
    return url.hostname;
  };
});