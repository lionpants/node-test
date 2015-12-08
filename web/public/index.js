var Module = angular.module('TestWeb', []);

Module.controller('TestBodyCtrl', function ($scope, $http) {

    $scope.search = function () {
        serverSideQuery();
    };
    
    function serverSideQuery() {
        $http.get('http://localhost:8888/listings/?q=' + $scope.query).
            success(function (data) {
                $scope.listings = data;
            });
    }
    
    function clientSideQuery() {
        var query = {
            query: {
                dis_max: {
                    queries: [
                        {
                            match: {
                                MLSNumber: $scope.query
                            }
                        },
                        {
                            match: {
                                Remarks: $scope.query
                            }
                        },
                        {
                            match: {
                                AgentName: $scope.query
                            }
                        },
                        {
                            match: {
                                City: $scope.query
                            }
                        },
                        {
                            match: {
                                OfficeName: $scope.query
                            }
                        }
                    ]
                }
            }
        };                
        
        $http.post('http://localhost:9200/wolfconnect/mls/_search', query).
            success(function (data) {
                var items = data.hits.hits;
                $scope.listings = items.map(function(item) {
                    return item._source;
                });
            });
    }
});