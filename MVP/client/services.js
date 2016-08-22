angular.module('mb.services', ['mbPhotos'])

.factory('Photos', function ($http) {

  var getPhotos = function(){
    return $http({
      method: 'GET',
      url: 'http://www.buzznet.com/interface/soap/?key=my_api_key&wsdl=true'
    })
    .then(function(resp){
      return resp.data;
    })
  };

  return {
    getPhotos: getPhotos
  };

})

.controller('MbPhotosController', function($scope){
  $scope.photos = [];
});