  (function () {
  

  angular
    .module('app')
    .config(routeConfigurator);

  routeConfigurator.$inject = ['$routeProvider','$provide','$httpProvider'];

  function routeConfigurator($routeProvider,$provide, $httpProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'app/modulos/ordenamiento/ordenamiento.html',
        controller: 'ordenamientoCtrl as vm'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
///:search

})();
