app.controller('mainController', [
  '$scope',
  'routes',
function($scope, routes) { 
  $scope.walks = routes.getRoutes().then(function dataSuccess(data){
    $scope.walks=data;
  });

  $scope.getRouteDetails = function(id){
    routes.getRouteDetails(id).then(function dataSuccess(data){
      $scope.routeName = data.name;
      initiateMap(data.locations);
      $scope.dogSnacks = getDogSnacks(data.locations);
    })
  }

  $scope.routeUrl = '';
  $scope.getRouteUrl = function(){
    routes.getRouteFromUrl($scope.routeUrl).then(function dataSuccess(data){
      $scope.routeName = data.name;
      initiateMap(data.locations);
      $scope.dogSnacks = getDogSnacks(data.locations);
    })
  }

  initiateMap = function(locations){
    var firstRoute = locations[0];
    routeMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: firstRoute.latitude, lng: firstRoute.longitude},
        zoom: 18
    });

    // Variable for holding the paths for drawing line on the route
    var routePath = [];

    // Loop locations to create markers on the map
    for(var count = 0; count < locations.length; count++){
      var route = locations[count];

      var marker = new google.maps.Marker({
          position: {
              lat: route.latitude, 
              lng: route.longitude
          },
          map: routeMap,
      });

      routePath.push({
        lat: route.latitude,
        lng: route.longitude
      })
    }
    var dogRoute = new google.maps.Polyline({
      path: routePath,
      strokeColor: '#FF0000',
      strokeWeight: 4
    });

    dogRoute.setMap(routeMap);
  }

  getDogSnacks = function(locations){
    // Get starting point
    let currentRoute = locations[0];
    let momentum = 0;
    let snacksNeeded = 0;

    // Start the loop on the 2nd route for comparison
    for(let count = 1; count < locations.length; count++){
        let nextRoute = locations[count];
        
        // Check if going up or going down.
        if(currentRoute.altitude > nextRoute.altitude){
            // Going down
            momentum = momentum + (currentRoute.altitude - nextRoute.altitude);
        } else if(currentRoute.altitude < nextRoute.altitude){
            // Going up
            
            // Get meter needed to go up
            let distance = nextRoute.altitude - currentRoute.altitude;
            // Check if there is still momentum then use it for going up
            if(momentum > 0){
                let momentumVal = momentum;
                momentum = momentum - distance;
                distance = distance - momentumVal;
            }

            // Check if dog need to eat snacks to go up
            if(distance > 0){
                momentum = 0;
                snacksNeeded = snacksNeeded + distance;
            }
        }
        currentRoute = nextRoute;
    }
    return snacksNeeded;
  }
}]);