var mod = angular.module('buddify.controllers.mapCtrl', []);

mod.controller('mapCtrl', function($scope, $ionicLoading, $state, $compile) {
  function initialize() {
      var myLatlng = new google.maps.LatLng(47.8075223,13.0564593);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
          mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'><p>Rockhaus Salzburg Verein <br>Schallmooser Hauptstraße 46, 5020 Salzburg<p></a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        label: 'R',
      });
      marker.setTitle('new title');
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

      $scope.map = map;
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
      if(!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });
    };

    $scope.clickTest = function() {
      alert('Example of infowindow with ng-click')
    };

    $scope.findbuddypage = function() {
    //console.log("It's in the function");

    $state.go('app.findBuddy');
  }

});
