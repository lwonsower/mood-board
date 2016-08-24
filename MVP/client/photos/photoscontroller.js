angular.module('mbphotos', ['mbservices'])

.controller('PhotosController', function ($scope, Photos) {
  $scope.finalPhotos = [];
  $scope.val = false;
  $scope.photos = {};
  $scope.genMood = function(input){
    Photos.getPhotos(input)
      .then(function(data){
        $scope.photos = data.data;
        var photoData = $scope.findPhotoPosts(data.data);
        console.log(photoData)
        var obj = photoData[Math.floor(Math.random() * photoData.length)]
        if (obj === undefined){
          $scope.val = true;
          return setTimeout(function(){ $scope.val = false; }, 5000);
        }
        console.log("final obj", obj.photos[0].original_size.url)
      $scope.finalPhotos.splice(0,0,(obj.photos[0].original_size.url))
      console.log("url", obj.photos[0].original_size.url)
    })
    .catch(function(err){
      console.log(err);
    })
  };

  $scope.removePhoto = function(index){
    $scope.finalPhotos.splice(index, 1)
  }

  $scope.findPhotoPosts = function(arr){
    var result = []
    arr.forEach(function(prop){
      if (prop.photos){
        result.push(prop)
      }
    })
    return result
  }

});