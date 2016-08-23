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
	var key = '3151113-b2e62f200736195f075023d16';
  var getPhotos = function(tag){
    console.log(tag);
    return $http({
    	method: 'GET',
    	url: 'https://pixabay.com/api/?key='+key+'&q='+tag+'&image_type=photo'
    })
    .then(function(resp, err){
    	if (err){ return err }
    	console.log(resp)
      return resp;
    })
  };

  return {
    getPhotos: getPhotos
  };

})

//http://api.tumblr.com/v2/tagged?tag
//luEr2hNSAnqAleDZ5ny3clJ8oIDC6SvMLCMfw8GXHUvRbJXeD0'