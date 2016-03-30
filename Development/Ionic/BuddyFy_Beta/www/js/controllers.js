var mod = angular.module('buddyfy.controllers', [
  	//'buddyfy.controllers.HomeController',
    'buddyfy.controllers.AppCtrl',
    'buddyfy.controllers.HomeCtrl',
    'buddyfy.controllers.registerController',
    'buddyfy.controllers.findYourBuddyCtrl',
    'buddify.controllers.mapCtrl',
]);

mod.factory("authObject", function($firebaseAuth) {
  var usersRef = new Firebase("https://buddytest.firebaseio.com/users");
  return $firebaseAuth(usersRef);
});
