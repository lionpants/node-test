var Module = angular.module('TestWeb', []);

Module.controller('TestBodyCtrl', function ($scope, $http) {
    $http.get('http://localhost:9200/wolfconnect/listings/10').
        success(function (data) {
            console.log(data);
        });
});