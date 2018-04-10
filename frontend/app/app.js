(function() {
  "use strict";

  angular.module('app', [
    //Módulos de ángular
    'ngRoute',

    //------Modulos------
    'app.ordenamiento',
  ])
  .constant("HOST", "http://localhost:5000/")
  .constant("TIMEOUT", 40500);

})();
