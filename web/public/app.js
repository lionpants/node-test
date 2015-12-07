var Module = angular.module('TestWeb', []);

Module.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
});