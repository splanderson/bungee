app
  .controller('categoryCtrl', function($scope, categoriesList){
    console.log(categoriesList);
    $scope.categories = categoriesList;
  });
