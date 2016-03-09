app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});


  app.controller("portfolioController", function($scope, $http, $routeParams){

  })

  app.controller("animator", function($scope){
        $scope.developer = true;
        $scope.designer = false;
        $scope.fade = true

    $scope.fader = function(){
      console.log('controller is working')
      $scope.fade = false
    }

    var looper = function(){
      setTimeout(looped, 2000)
    }
    var looped = function(){
      $scope.developer = !$scope.developer;
      $scope.designer = !$scope.designer;
      looper()
      console.log('developer is ' +$scope.developer + ' designer is ' +$scope.designer)
    }

    $scope.looped = function(){
      setTimeout(function(){$scope.designer = !$scope.designer;}, 2000)
      $scope.developer = !$scope.developer;

    }

    looper()
  })
