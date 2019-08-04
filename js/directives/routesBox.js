app.directive('routesBox', function() { 
    return { 
      template: '<div class="view overlay text-center">'+
                    '<img class="card-img-top" src="img/dog-route.png">'+
                '</div>'+
                '<div class="card-body">'+
                    '<h4 class="card-title">{{ walk.name }}</h4>'+
                    '<button type="button" class="btn btn-warning btn-md float-right " data-toggle="modal" data-target="#routeModal"  ng-click="getRouteDetails(walk.id)">View Route</button>' +
                '<br/></div> '
    }; 
}); 