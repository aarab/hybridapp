angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('BrowseCtrl', function($scope, $ionicSideMenuDelegate, $cordovaGeolocation){
  $ionicSideMenuDelegate.canDragContent(false)
        $scope.map = {
                  center: {
                      latitude: 31.63759859 , 
                      longitude: -8.00598621 
                          }, 
                  zoom: 14 
            };
    
       $scope.options = {
                  scrollwheel: false, 
                  mapTypeId: "roadmap" 
            };
  
        $scope.markericon = "img/moose.png";
        $scope.markers = []
  
  
  

  
 $scope.showallmarker = function() {
       $scope.markers = []
 for(var i=0; i<3; i++) {
                $scope.markers.push({
                    id: $scope.markers.length,
                    latitude: 40.7143528 + (i * 0.005),
                    longitude: -74.0059731 + (i * 0.002),
                    icon: $scope.markericon,
                    content: "I am located at " 
                });
              }  
     
        $scope.map = {
                  center: {
                      latitude: 40.7143528  , 
                      longitude: -74.0059731 
                          }, 
                  zoom: 14 
            };
  
 }
  
  
 // navigator.geolocation.getCurrentPosition(function (position) { // not working
    
    
    // get position of user and then set the center of the map to that position
  $scope.findme = function() {
             
      $cordovaGeolocation.getCurrentPosition()
      .then(function (position) {
              var lat  = position.coords.latitude
              var long = position.coords.longitude
              $scope.map = {
                  center: {
                      latitude: lat, 
                      longitude: long
                  },
                  zoom: 16 
              };
              //just want to create this loop to make more markers
            $scope.markers = []
                $scope.markers.push({
                    id: $scope.markers.length,
                    latitude: lat,
                    longitude: long,
                    icon: $scope.markericon,
                    content: "this is you location"
                });
          console.log($scope.markers);
        
          
              $scope.onMarkerClick = function(marker, eventName, model) {
                  model.show = !model.show;
              }

            }, function(err) {
              // error
            })
              };
              
              
              
        $scope.findme();      
 

});
