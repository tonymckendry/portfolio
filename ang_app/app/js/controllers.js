app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});


  app.controller("portfolioController", function($scope, $http, $routeParams){

  })

  app.controller("animator", function($scope){

        $scope.fade = true
    $scope.fader = function(){
      console.log('controller is working')
      $scope.fade = false
    }
  })
