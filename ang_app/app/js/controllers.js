app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});

app.controller("CatsIndexController", function($scope, CatService){
  CatService.getCats().then(function(payload){
    $scope.cat_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
});

app.controller("CatsShowController", function($scope, CatService, $routeParams){
  the_id = $routeParams.id;
  console.log("my params are "+the_id);
  CatService.getCat(the_id).then(function(payload){
    console.log("we are getting ONE Cat named: "+payload.data[0].name);
    $scope.singleCat = payload.data[0];
  }, function(error){
    console.log("an error occurred");
  });
  });

  app.controller("CatsPostController", function($scope, CatService, $routeParams){
    console.log('in controller*******');
    $scope.cat = {}
    $scope.newCat = function(){
      console.log('we are submitting ', $scope.cat);
      CatService.newCat($scope.cat).then(function(payload){
        console.log("successful Kitty: ", payload);
      })
    }

  })
