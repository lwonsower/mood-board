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
        console.log("filtered photos", info)
        let obj = info[Math.floor(Math.random() * info.length)]
        if (obj === undefined){
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
    $scope.finalPhotos.splice(index, 1)
  }

});


