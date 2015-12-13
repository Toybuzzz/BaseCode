angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.postData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/post.html', {
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
  //  $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.postData);
    $scope.modal.hide();
    $rootScope.playlists.unshift({title: $scope.postData.title, imgUrl: $rootScope.imgUrl, description: $scope.postData.description});
    $rootScope.$apply();
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    //$timeout(function() {
      //$scope.closeLogin();
    //}, 1000);
  };

  $scope.cameraOn = function () {
    navigator.camera.getPicture(function (suc) {
      console.log(suc, 'success');
      alert(suc);
      $rootScope.imgUrl = suc;
      $scope.modal.show();
    }, function (err) {
      console.log(err, 'error');
    }); 
  }
})

.controller('PlaylistsCtrl', function($rootScope, $scope, $document) {
  $scope.i = 0;
  $rootScope.playlists = [
    { title: 'Random Item 1', id: 1, imgUrl:'img/1.jpg', description: '#size5shoes #20bucks' },
    { title: 'Random Item 2', id: 2, imgUrl:'img/2.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 3', id: 3, imgUrl:'img/3.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 4', id: 4, imgUrl:'img/4.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 5', id: 5, imgUrl:'img/5.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 6', id: 6, imgUrl:'img/6.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 7', id: 7, imgUrl:'img/7.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 8', id: 8, imgUrl:'img/8.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 9', id: 9, imgUrl:'img/9.jpg', description: '#size5shoes #20bucks'   },
    { title: 'Random Item 10', id: 10, imgUrl:'img/10.jpg', description: '#size5shoes #20bucks'  },
    { title: 'Random Item 11', id: 11, imgUrl:'img/11.jpg', description: '#size5shoes #20bucks'  },
    { title: 'Random Item 12', id: 12, imgUrl:'img/12.jpg', description: '#size5shoes #20bucks'  },
    { title: 'Random Item 13', id: 13, imgUrl:'img/13.jpg', description: '#size5shoes #20bucks'  }
  ];

  $scope.setHeight = window.innerHeight - 180;

  $scope.getScrollPosition = function  (argument) {
    // body...
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
