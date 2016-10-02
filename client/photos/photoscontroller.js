angular.module('mbphotos', ['mbservices'])

.controller('PhotosController', function ($scope, Photos) {
  $scope.finalPhotos = [];
  $scope.val = false;
  $scope.genMood = function(input){
    Photos.getPhotos(input)
      .then(function(data){
        let info = data.data.filter((item) => {
          return item.photos;
        });
        let obj = info[Math.floor(Math.random() * info.length)]
        console.log(obj)
        if (obj === undefined || obj === $scope.finalPhotos[$scope.finalPhotos.length-1]){
          $scope.val = true;
          return setTimeout(function(){ $scope.val = false; }, 5000);
        }
      $scope.finalPhotos.push(obj.photos[0].original_size.url)
    })
    .catch(function(err){
      console.log(err);
    })
  };

  $scope.removePhoto = (index) => {
    index = $scope.finalPhotos.length - index - 1;
    $scope.finalPhotos.splice(index, 1)
  }

});



