angular.module('Myapp', ['ngResource', 'ionic', 'ui-router'])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


        // var url = 'http://localhost:8877/dest/shopdest/';
        $stateProvider
            .state('home', {
                url: '/home',
                prefetchTemplate: false,
                templateUrl: 'index.html',
                controller: 'HomeCtrl'
            })
            .state('blog', {
                url: '/blog',
                prefetchTemplate: false,
                templateUrl: '/shopdest/blog.html',
                controller: 'BlogCtrl'
            })
            .state('products', {
                url: '/products',
                prefetchTemplate: false,
                templateUrl: '/shopdest/products.html',
                controller: 'ProductsCtrl'
            })

    })