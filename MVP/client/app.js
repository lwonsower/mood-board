angular.module('mbservices', [
	'mbphotos',
	'ngRoute'
	])

// .config(function($routeProvider, $httpProvider){
// 	$routeProvider
// 		.when('/photos', {
// 			templateUrl: 'photos/photos.html',
// 			controller: 'PhotosController'
// 		})
// 		.otherwise({redirectTo: '/'})
// })

.factory('Photos', function ($http) {
  var getPhotos = function(tag){
    return $http({
    	method: 'POST',
    	url: '/',
    	data: { tag : tag }
    })
    .then(function(resp, err){
    	if (err){ return err }
    	console.log(resp)
      return resp;
    })
  };

  return {
    getPhotos: getPhotos,
  };

})
