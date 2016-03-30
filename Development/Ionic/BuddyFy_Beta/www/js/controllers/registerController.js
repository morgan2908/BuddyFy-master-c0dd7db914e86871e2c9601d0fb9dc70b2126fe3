

var mod = angular.module('buddyfy.controllers.registerController', [
  'ionic',
  'firebase'
]);

mod.controller("registerController", function(
  $scope,
  $http,
  $q,
  $firebaseAuth,
  $state,
  authObject,
  $ionicSlideBoxDelegate

){

  $scope.headername = "Login";

  $scope.buttons = [
    { name: 'Login' },
    { name: 'Sign Up' }
  ];

  $scope.slide = function(to) {
    $scope.current = to;
    $ionicSlideBoxDelegate.slide(to);
    if ($scope.current===0){
        $scope.headername = "Login";
    }else{
        $scope.headername = "Sign Up";
    }
  }


  $scope.newUser = {};

  $scope.register = function() {
    // form validation

    // user registered, now we should add this user data on buddytest.firebaseio.com/users

    //if you add name, last name etc.

    var ref = new Firebase("https://buddytest.firebaseio.com/");
    ref.createUser({
      email    : $scope.newUser.email,
      password : $scope.newUser.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        var userDataRef = ref.child("users").child(userData.uid);
        userDataRef.set({
          name: $scope.newUser.name
        });

        $state.go('app.tabs');
      }
    });
  };




  $scope.loginData = {};

  $scope.doLogin = function(valid) {
    // validation here

    console.log("valid");

    var ref = new Firebase("https://buddytest.firebaseio.com/");

    ref.authWithPassword({
      email    : $scope.loginData.email,
      password : $scope.loginData.password,

    }, function(error, authData) {

        if (error === null) {
          $state.go('app.tabs');
        }else{
          console.log(authData);
          console.log("Error"+error);
      // and you can go users entity and get others data. (name, etc)
      // so, you can store on localstorage all data for current user.

      } // if end



    }, {


      remember: "sessionOnly",


    });

  };



  $scope.signUpWithFacebook = function() {
      console.log("I am in login function");

    // var ref = new Firebase('https://buddytest.firebaseio.com/users');
    // var authObject = $firebaseAuth(ref);

    authObject.$authWithOAuthPopup('facebook').then(function(authData) {

      // var name1 = authData.facebook.displayName;
      // console.log("This is working: " + name1);

      console.log("Authentication success, logged in as:", authData.uid);
      console.log("Name:", authData.facebook.displayName);
      console.log("email:", authData.facebook.email);

      console.log(authData);


      var ref = new Firebase("https://buddytest.firebaseio.com/users");

      function authDataCallback(authData) {
        if (authData) {
          console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
          console.log("User is logged out");
        }
      }

      ref.onAuth(authDataCallback);

      ref.orderByChild('facebook_id').equalTo(authData.uid).once('value', function(snapshot) {
        console.log('here');
        console.log(snapshot.val());

        if (snapshot.val() === null) {
          // create user
          var newUser = ref.push();
          newUser.set({
            facebook_id: authData.uid,
            name: authData.facebook.displayName,
            //email: authData.facebook.email
          });
          $state.go('app.tabs');
        } else {
          // allready exists
          alert('User already exists');
        }
      });


    }).catch(function(error){

        console.log("error: "+error);

    });

  };




  $scope.supertest = function() {
    alert("working");
      $state.go('test');
  };

});


//
// $scope.makeRequest = function() {
//
//
//
//   $http(
//     {
//       url:"https://httpbin.org/get",
//       method: "GET",
//     }
//   ).then(function(result) {console.log(JSON.stringify(result));}, function(error) {console.log(JSON.stringify(error));});
//
// };
  // $scope.test = function() {
  //
  //   console.log("Test");
  //
  // };

  //
  // var testfunction = function() {
  //       var deferred = $q.defer();
  //   if(1==1){
  //     // return positive
  //     deferred.resolve("This was positive");
  //   } else {
  //     // return negative
  //     deferred.reject("This was negative");
  //   }
  //   // return promise
  //   return deferred.promise; //you return promise..so you app knows that you are waiting for something and then depending on how the server response you can reject or resolve
  // };

  //$scope.listItems = ["Anant Sangar", "Aruensh Dubey", "Amrit Bhogal"];
