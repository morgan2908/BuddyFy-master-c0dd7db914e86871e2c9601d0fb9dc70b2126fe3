// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
 angular.module('buddyfy', ['ionic',
'buddyfy.controllers',
'ui.router',
'buddyfy.services',
"firebase",
	//'buddyfy.controllers.HomeController',

])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider



      .state("start", {
        "url": "/start",
        "templateUrl": "templates/signUp_login/startscreen.html",
        "controller": "registerController",
        "cache": false
      })

      .state("register", {
        "url": "/register",
        "templateUrl": "templates/signUp_login/signup.html",
        "controller": "registerController",
        "cache": false
      })

      .state("login", {
        "url": "/login",
        "templateUrl": "templates/signUp_login/login.html",
        "controller": "registerController",
        "cache": false
      })

      .state("map", {
        "url": "/map",
        "templateUrl": "templates/findBuddy/map.html",
        "controller": "mapCtrl",
        "cache": false
      })


    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.tabs', {
      url: "/tabs",
      views: {
        'menuContent': {
          templateUrl: "templates/tabs.html"
        }
      }
    })

  .state('app.tabs.upcomingMeetings', {
        url: '/upcomingMeetings',
        views: {
          'tab-upcomingMeetings': {
            templateUrl: 'templates/tab-upcomingMeetings.html',
            controller: 'HomeCtrl'
          }
        }
      })

  .state('app.tabs.tab2', {
        url: '/tab2',
        views: {
          'tab-tab2': {
            templateUrl: 'templates/findBuddy/listvenues.html',
            controller: 'findYourBuddyCtrl'
          }
        }
      })


  .state('app.findBuddy', {
      url: '/findBuddy',
      views: {
        'menuContent': {
          templateUrl: 'templates/findBuddy/findYourBuddy.html',
          controller: 'findYourBuddyCtrl'
        }
      }
    })
    .state('app.userProfile', {
        url: '/userProfile',
        views: {
          'menuContent': {
            templateUrl: 'templates/userProfile.html',
            controller: 'findYourBuddyCtrl'
          }
        }
      })

    // .state('app.home', {
    //   url: '/home',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/home.html',
    //       controller: 'HomeCtrl'
    //     }
    //   }
    // })

    .state('app.venues', {
      url: '/:othervenuesID',
      views: {
        'menuContent': {
          templateUrl: 'templates/findBuddy/listvenues.html',
          controller: 'findYourBuddyCtrl'
        }
      }
    })

  .state('app.meeting', {
    url: '/:meetingId',
    views: {
      'menuContent': {
        templateUrl: 'templates/yourMeeting.html',
        controller: 'MeetingCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('start');
  $ionicConfigProvider.tabs.position('bottom');
});
