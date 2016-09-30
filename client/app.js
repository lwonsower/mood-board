angular.module('mbservices', [
	'mbphotos',
	'ngRoute'
	])

.factory('Photos', function ($http) {
  var getPhotos = function(tag){
    return $http({
    	method: 'POST',
    	url: '/',
    	data: { tag : tag }
    })
    .then(function(resp, err){
    	if (err){ return err }
      return resp;
    })
  };

  return {
    getPhotos: getPhotos,
  };

})
