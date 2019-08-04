app.directive('routeMaps', function() { 
    return { 
      template: 
     ' <div class="modal fade bd-example-modal-xl" id="routeModal" tabindex="-1" role="dialog">'+
                   '<div class="modal-dialog modal-xl">'+
                        '<div class="modal-content">'+
                           ' <div class="modal-header">'+
                               ' <h5 class="modal-title">{{ routeName }}</h5>'+
                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                    '<span aria-hidden="true">&times;</span>'+
                                '</button>'+
                            '</div>'+
                            '<div class="modal-body">'+
                               '<div id="map"></div>'+
                            '</div>'+
                           '<div class="modal-footer">'+
                           '<h4 class="card-title">Needed dog snacks for this trip : {{dogSnacks}}</h4>'+
                           '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'
    }; 
}); 