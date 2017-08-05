angular.module('Myapp', ['ionic']).controller('HomeCtrl', function($scope, $rootScope, $state, $window, $http) {
        $scope.name = '帅气的登陆';
        $scope.gonew = function() {
            window.location.href = 'blog.html';
        }

        $http.get('json/lb.json').then(function(data) {

            console.log(data.data);
            $scope.arr = data.data;
            console.log($scope.arr.length);
        }, function(data) {

        })
        $scope.send = function() {
            console.log(2222);
        }
    })
    .controller('BlogCtrl', function($scope, $state, $http) {
        $scope.age = 1999999999;
        $scope.gohome = function() {
            window.location.href = 'index.html';
        }
        $http.get('json/new.json').then(function(data) {
            console.log(data.data);
            $scope.new = data.data;
        })
    })
    .controller('ProductsCtrl', function($scope, $state, $http) {
        $scope.time = 88888888;
        $http.get('json/products.json').then(function(data) {
            console.log(data.data);
            $scope.products = data.data;
        }, function(data) {

        })
    })