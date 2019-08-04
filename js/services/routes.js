app.service('routes', ['$http', function($http) { 

    this.getRoutes = function() {
        return $http({
            method : 'GET',
            url : 'https://infinite-lake-80504.herokuapp.com/api/routes'
        }).then(dataSuccess,dataFailed);
        function dataSuccess(data){
            return data.data;
        }
        function dataFailed(error){
            return error;
        }
    }
    

    this.getRouteDetails = function(id) {
        return $http({
            method : 'GET',
            url : 'https://infinite-lake-80504.herokuapp.com/api/routes/' + id
        }).then(dataSuccess,dataFailed);
        function dataSuccess(data){
            return data.data;
        }
        function dataFailed(error){
            return error;
        }
    }

    this.getRouteFromUrl = function(url) {
        return $http({
            method : 'GET',
            url : url
        }).then(dataSuccess,dataFailed);
        function dataSuccess(data){
            return data.data;
        }
        function dataFailed(error){
            return error;
        }
    }
}]);