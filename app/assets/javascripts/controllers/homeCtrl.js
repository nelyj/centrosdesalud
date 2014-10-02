app = angular.module('Controllers', []);

function initCall() {
  console.log('Google maps api initialized.');
  angular.bootstrap(document.getElementById('map'), ['doc.ui-map']);
}

app.controller('homeCtrl',['$scope','$routeParams',function($scope, $routeParams){
	$scope.background="home";


  $scope.map = {
    center: {
        latitude: -33.4262800,
        longitude: -70.5665600
    },
    options:{
      animation: google.maps.Animation.BOUNCE
    },
    zoom: 14
  };


}]);