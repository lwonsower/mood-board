angular.module('mbphotos', ['mbservices'])

.controller('PhotosController', function ($scope, Photos) {
  $scope.finalPhotos = [];
  $scope.val = false;
  $scope.photos = {};
  $scope.genMood = function(input){
    Photos.getPhotos(input)
      .then(function(data){
        $scope.photos = data;
        var obj = $scope.photos.data.hits[Math.floor(Math.random()*($scope.photos.data.hits).length)]
      $scope.finalPhotos.push({
        url: obj.webformatURL
      })
      $scope.val = true;
      console.log("url", $scope.finalPhotos[0].url)
    })
    .catch(function(err){
      console.log(err);
    })
  };


});