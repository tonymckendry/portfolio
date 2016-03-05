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

    app.controller('pokemonController', function($scope, $http){
      $http.get('http://pokeapi.co/api/v1/pokedex/').then(function(response){
        var pokeArr = []
        var pokePath = response.data.objects[0].pokemon

        // The PokeAPI does not return the Pokemon in the correct order, but it 
        // does give me their ID in the resource_uri that is provided, so I just
        // have to isolate that and then Angular can sort it for me

        for (var i = 0; i < pokePath.length; i++) {
          var pokeObj = {}
          pokeObj.name = pokePath[i].name
          pokeObj.id = pokePath[i].resource_uri[15]+pokePath[i].resource_uri[16]+pokePath[i].resource_uri[17]+pokePath[i].resource_uri[18]+pokePath[i].resource_uri[19]
          if (pokeObj.id[2] == 'u'){
            pokeObj.id = pokeObj.id[0]
          }
          else if (pokeObj.id[2] == '/'){
            pokeObj.id = pokeObj.id[0] + pokeObj.id[1]
          }
          else if (pokeObj.id[3] == '/'){
            pokeObj.id = pokeObj.id[0] + pokeObj.id[1] + pokeObj.id[2]
          }
          else if (pokeObj.id[3] == 'u'){
            pokeObj.id = pokeObj.id[0] + pokeObj.id[1] + pokeObj.id[2]
          }
          else if (pokeObj.id[4] == '/'){
            pokeObj.id = pokeObj.id[0] + pokeObj.id[1] + pokeObj.id[2] + pokeObj.id[3]
          }
          else if (pokeObj.id[4] == 'u'){
            pokeObj.id = pokeObj.id[0] + pokeObj.id[1] + pokeObj.id[2] + pokeObj.id[3]
          }
          pokeObj.id = parseInt(pokeObj.id)
          pokeArr.push(pokeObj)
        }
        console.log(pokeArr)
        $scope.pokemon = pokeArr
      })
    })
