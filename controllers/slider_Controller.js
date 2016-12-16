angular.module('mapsApp')
.controller('SliderCtrl', function ($scope) {
	$scope.button = {clicked: false, tooltip: 'Click to minimize the information panel'};
/*
    if ($scope.button.clicked !== false && $scope.button.clicked !== true) {
        $scope.button.clicked = false;
        $scope.button.tooltip = 'Click to minimize the information panel';
    }
*/
    $scope.changeStatus = function(){
    	$scope.button.clicked = !$scope.button.clicked;
    	if ($scope.button.clicked){
    		$scope.button.tooltip = 'Click to maximize the information panel'
    	}
    	else{
    		$scope.button.tooltip = 'Click to minimize the information panel'
    	}
    	$( "#infopanel" ).toggle( "slide" );
    };

});