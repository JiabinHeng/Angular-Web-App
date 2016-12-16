var app = angular.module("mapsApp", ["ngRoute","esri.map",'multiselect-searchtree']);

// Define page routing
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when("/link1", {
        templateUrl : "templates/link1.html"
    })
    .when("/link2", {
        templateUrl : "templates/link2.html"
    })
    .when("/dropdown1", {
        templateUrl : "templates/dropdown/dropdown1.html"
    })
    .when("/dropdown2", {
        templateUrl : "templates/dropdown/dropdown2.html"
    })
    .when("/dropdown3", {
        templateUrl : "templates/dropdown/dropdown3.html"
    });
});


