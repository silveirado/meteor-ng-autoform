'use strict'

angular.module('autoFormApp')
.config(function($stateProvider) {
  $stateProvider
  .state('carros', {
    url: '/carros',
    templateUrl: 'client/carros/carros.view.ng.html',
    controller: 'CarrosCtrl as carros'
  });
});
