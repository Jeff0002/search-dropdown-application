var app = angular.module('myApp', []);

app.controller("searchCtrl", function ($scope, $http) {
    $scope.$watch('input', function (input) {
        if (input != undefined) {
            $http({
                    url: "http://search-dropdown-api.herokuapp.com/search/" + input, 
                    method: "GET",
                })
                .success(function (data, status) {
                    $scope.search_result = data;
                    console.log(data);
                });
        }
    });
    $scope.searchCustomer = function(country){
        console.log(country);
        $http({
            url: "http://search-dropdown-api.herokuapp.com/customer/" + country,
            method: "GET"
            })
            .success(function (data, status) {
                $scope.show_customer = data;
                console.log(data);
            });
        
    };

});