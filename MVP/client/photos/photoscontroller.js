angular.module('mbphotos', [])

.controller('PhotosController', function ($scope, Photos) {
  $scope.data = {};
  $scope.getPhotos= function(){
    Photos.getPhotos()
      .then(function(data){
      $scope.data.links = data;
      console.log('Inside INNER linksGET', data);
    })
    .catch(function(err){
      console.log(err);
    })
  };
  $scope.getPhotos();
});