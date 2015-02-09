angular.module('iotgo').
  controller('SignupCtrl', [ '$scope', '$window', '$location', 'User',
    function ($scope, $window, $location, User) {
      $scope.register = function () {
        if (! $scope.email || ! $scope.password) {
          $window.alert('Email and Password must not be empty!');
          return;
        }

        User.register($scope.email, $scope.password, 'no reCAPTCHA', function (err) {
          if (err) {
            $window.alert(err);
            return;
          }

          $location.path('/devices');
        });
      };
    }
  ]);
