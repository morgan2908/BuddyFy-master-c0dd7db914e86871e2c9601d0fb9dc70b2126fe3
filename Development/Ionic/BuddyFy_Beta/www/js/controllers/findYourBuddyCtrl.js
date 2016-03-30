var mod = angular.module('buddyfy.controllers.findYourBuddyCtrl',  ['ionic', 'ionic-datepicker' ]);

mod.controller('findYourBuddyCtrl', function(
  $scope,
  $state,
  $ionicPopover,
  $ionicModal
  //$ionicModal2
) {

  $scope.findbuddypage = function() {
  //console.log("It's in the function");
  $state.go('app.home');

};

 $scope.openMap = function() {
  console.log("I am here");
  $state.go('map');
};

$scope.datepickerObject = {
     titleLabel: 'Title',  //Optional
     todayLabel: 'Today',  //Optional
     closeLabel: 'Close',  //Optional
     setLabel: 'Set',  //Optional
     setButtonType : 'button-assertive',  //Optional
     todayButtonType : 'button-assertive',  //Optional
     closeButtonType : 'button-assertive',  //Optional
     inputDate: new Date(),  //Optional
     mondayFirst: true,  //Optional
     disabledDates: disabledDates, //Optional
     weekDaysList: weekDaysList, //Optional
     monthList: monthList, //Optional
     templateType: 'popup', //Optional
     showTodayButton: 'true', //Optional
     modalHeaderColor: 'bar-positive', //Optional
     modalFooterColor: 'bar-positive', //Optional
     from: new Date(2012, 8, 2), //Optional
     to: new Date(2018, 8, 25),  //Optional
     callback: function (val) {  //Mandatory
       datePickerCallback(val);
     },
     dateFormat: 'dd-MM-yyyy', //Optional
     closeOnSelect: false, //Optional
   };

 var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];

 var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

   var disabledDates = [
      new Date(1437719836326),
      new Date(),
      new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
      new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
      new Date("08-14-2015"), //Short format
      new Date(1439676000000) //UNIX format
    ];

    var datePickerCallback = function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val);
  }
};

// $scope.currentDate = new Date();
// $scope.minDate = new Date(2105, 6, 1);
// $scope.maxDate = new Date(2015, 6, 31);
//
// $scope.datePickerCallback = function (val) {
// 	if (!val) {
// 		console.log('Date not selected');
// 	} else {
// 		console.log('Selected date is : ', val);
// 	}
// };

  $scope.selectedActivityID = 0;
  $scope.selectedMoodID = 0;
  $scope.selectedMood;
  $scope.click = false;
  $scope.selectedActivityName = "none";
  $scope.activityText = "What are you up today?";
  $scope.moodText = "What do you fancy?";
  $scope.offer;

  $scope.locationName = 'Your location';
  $scope.locationAdr;
  $scope.activities = [{id: 1, name: 'Drinking', icon: 'ion-android-bar'},
        {id: 2, name: 'Clubbing', icon: 'ion-ios-people' },
        {id: 3, name:'Events', icon: 'ion-android-pin'}];


  $scope.moodDrinking = [{id: 1, name: 'Beer', icon: 'ion-android-bar'},
        {id: 2, name: 'Cocktails', icon: 'ion-android-bar' },
        {id: 3, name:'Soft Drinks', icon: 'ion-android-bar'}];

  $scope.moodClubbing= [{id: 1, name: 'Hip-Hop', icon: 'ion-ios-people'},
        {id: 2, name: 'Rock', icon: 'ion-ios-people' },
        {id: 3, name:'RnB', icon: 'ion-ios-people'}];

  $scope.moodEvent = [{id: 1, name: 'Concert', icon: 'ion-android-pin'},
        {id: 2, name: 'Art Shows', icon: 'ion-android-pin' },
        {id: 3, name:'Opera', icon: 'ion-android-pin'}];

  $scope.offerEventConcert = {name: 'Rockhaus', adr: 'Schallmooser Hauptstraße 46, 5020 Salzburg', link:'http://www.rockhouse.at/', cover: '../img/rockhaus.jpg', info: 'WELCOME TO THE CLUB! Since opening in 1993, Rockhouse Salzburg has established itself as one of the best and most popular music clubs in Europe, true to its motto "Different sounds - on the pulse of time." The "House of Music" is also an interesting location from an architectural point of view, successfully combining historic vaults with modern architecture. Its all-year culture program features over 250 events - concerts, clubbings, workshops, etc.- very compact and diversified. The wide range of music styles at the Rockhouse in Salzburg include alternative, pop, rock, jazz, folk, blues, metal, HipHop and reggae. International and national stars and newcomers - also away from the mainstream - have appeared on the big Rockhouse stage as well as the smaller club stage in the Rockhouse Bar. The Rockhouse Bar is one of the city"s most innovative bars and also open when no events are scheduled. Whether you prefer live bands, clubbing, after-show parties or simply want to enjoy the nightlife: WELCOME TO THE CLUB! '};

  $scope.GoToOfferWebsite = function () {
   window.open($scope.offerEventConcert.link,'_system', 'location=yes');
 }
  $scope.indexOfSelectedActivityID = function (activityId) {
        if (activityId == 1) {
              $scope.selectedActivityID = 1;
              $scope.activityText = "Drinking";
        }
        else if (activityId == 2) {
              $scope.selectedActivityID = 2;
              $scope.activityText = "Clubbing";
        }
        else if (activityId == 3) {
              $scope.selectedActivityID = 3;
              $scope.activityText = "Events";
        }
        $scope.closeModalListActivity();
  }

  $scope.indexOfSelectedMoodID = function (moodName) {
        $scope.moodText = moodName;
        if  ($scope.moodText == 'Concert')  {
            $scope.offer = $scope.offerEventConcert;
            $scope.closeModalListMood();
            $scope.openModalOffer();
        }
        $scope.closeModalListMood();
  }


  $ionicModal.fromTemplateUrl('templates/findBuddy/listactivities.html', {
        id: '1',
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modalListActivity = modal;
      });
    $scope.openModalListActivity = function(){
        $scope.modalListActivity.show();
    };
    $scope.closeModalListActivity = function(){
      $scope.modalListActivity.hide();
    };



    $ionicModal.fromTemplateUrl('templates/findBuddy/listmood.html', {
          id: '2',
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {

          $scope.modalListMood = modal;
        });
      $scope.openModalListMood= function(){
          $scope.setMoodAccordingActivity();
          $scope.modalListMood.show();

      };
      $scope.closeModalListMood= function(){
        $scope.modalListMood.hide();
      };

      $scope.setMoodAccordingActivity = function() {
        if ($scope.selectedActivityID == 1)
            $scope.selectedMood = $scope.moodDrinking;
        else if  ($scope.selectedActivityID == 2)
            $scope.selectedMood = $scope.moodClubbing;
        else if  ($scope.selectedActivityID == 3)
            $scope.selectedMood = $scope.moodEvent;
      }


      $scope.$on('modal.shown', function(event, modal) {
         console.log('Modal ' + modal.id + ' is shown!');
       });

       $scope.$on('modal.hidden', function(event, modal) {
         console.log('Modal ' + modal.id + ' is hidden!');
       });

       $scope.$on('$destroy', function() {
         console.log('Destroying modals...');
         $scope.oModalListActivity.remove();
         $scope.omodalListMood.remove();
    });

    $ionicModal.fromTemplateUrl('templates/findBuddy/offer.html', {
          id: '3',
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.modalOffer = modal;
        });
      $scope.openModalOffer = function(){
          $scope.modalOffer.show();
      };
      $scope.closeModalOffer = function(){
        $scope.modalOffer.hide();
        recommendatoinSelected

      };
      $scope.recommendatoinSelected = function(){
        $scope.locationName = $scope.offer.name;
        $scope.locationAdr = $scope.offer.adr;
        $scope.modalOffer.hide();
      };

    // $ionicModal2.fromTemplateUrl('templates/listmood.html', {
    //       scope: $scope,
    //       animation: 'slide-in-up'
    //     }).then(function(modal) {
    //       $scope.modal = modal;
    //     });
    //   $scope.openModal2 = function(){
    //     $scope.modal.show();
    //   };
    //   $scope.closeModal2 = function(){
    //     $scope.modal.hide();
    //   };
    //


  $scope.openVenueList= function(){

      $scope.modalOffer.hide();
      $state.go('app.venues');
  };

  // Some fake testing data
  $scope.venues = [
    {
    id: 0,
    img: 'img/republicsalzburgjpeg.jpeg',
    name: 'Republic Salzburg',
    venueDescription: 'This is a club located in the heart of Salzburg.',
    address: 'Groediger Weg 53'
    },
    {
    id: 1,
    img: 'img/cubabar.jpg',
    name: 'Cuba Bar Salzburg',
    venueDescription: 'This is a bar located near the Airport.',
    address: 'AirportCenter Strasse 34'
    },
    {
    id: 2,
    img: 'img/hangar7.jpg',
    name: 'Hangar 7',
    venueDescription: 'An elengant bar located near the Airport and City.',
    address: 'Hangar 7 Street 5'
    },
    {
    id: 4,
    img: 'img/steinterasse.jpeg',
    name: 'Steinterasse',
    venueDescription: 'Bla Bla.',
    address: 'Staatsbruecke'
    },
    {
    id: 4,
    class: 'item-5',
    img: 'img/category/5.jpg',
    name: 'Special drinks',
    lastText: 'Enthusiastically architect.'
  }];

  $scope.indexOfSelectedVenueID = function () {

      $scope.openModalOffer();

  }


});
