var mod = angular.module('buddyfy.controllers.HomeCtrl', []);

mod.controller('HomeCtrl', ['$scope',
  function(
  $scope

) {

  $scope.clicked = function(num) {
    $scope.var = num;
    console.log("Your have pressed the button"+$scope.var);
};


  $scope.hidden = true;
  $scope.currentDate = new Date();

  $scope.yourMeetings = [
  {
    meeting_type: 'Group meeting',
    venue: ' Prezzo',
    time: '8pm',
    location: 'Test Street 45',
    image: 'Source',
    id:1
  },
  {
    meeting_type: 'Meeting',
    venue: ' Starbucks',
    time: '12am',
    location: 'Bulk Street 45',
    image: 'Source',
    id:2
  },
  {
    meeting_type: 'Group meeting',
    venue: ' Pizza Express',
    time: '9.30pm',
    location: 'Test Street',
    image: 'Source',
    id:3
  },
  {
    meeting_type: 'Group meeting',
    venue: ' RocknRoll',
    time: '7pm',
    location: 'Mansfield Road',
    image: 'Source',
    id:4
  },
  {
    meeting_type: 'Group meeting',
    venue: ' RocknRoll',
    time: '7pm',
    location: 'Mansfield Road',
    image: 'Source',
    id:5
  },
  {
    meeting_type: 'Group meeting',
    venue: ' RocknRoll',
    time: '7pm',
    location: 'Mansfield Road',
    image: 'Source',
    id:6
  },
  {
    meeting_type: 'Group meeting',
    venue: ' RocknRoll',
    time: '7pm',
    location: 'Mansfield Road',
    image: 'Source',
    id:7
  },
  {
    meeting_type: 'Group meeting',
    venue: ' RocknRoll',
    time: '7pm',
    location: 'Mansfield Road',
    image: 'Source',
    id:8
  }

];

}]);

mod.controller('MeetingCtrl', ['$scope', '$stateParams',
  function($scope, $stateParams) {

    console.log("Test: ",$stateParams.meetingId);
    console.log($stateParams);
    console.log("in stockController");

    $scope.meetingID = $stateParams.meetingId;


  }]);
