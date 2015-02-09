angular.module('iotgo')

.factory('Settings', [ '$location', function ($location) {
  //var host = $location.host() + ':' + $location.port();
  var host = '172.16.7.188:3000';

  return {
    httpServer: 'http://' + host,
    websocketServer: 'ws://' + host
  };
} ]);
