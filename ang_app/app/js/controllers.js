app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});


  app.controller("portfolioController", function($scope, $http, $routeParams){

  })

  app.controller("animator", function($scope){
        $scope.developer = false;
        $scope.designer = true;
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
      console.log('looped')
    }

    $scope.looped = function(){
      $scope.developer = !$scope.developer;
      $scope.designer = !$scope.designer;
      console.log('looped-click')
    }

    looper()
  })
