(function() {  
  "use strict";
  angular
    .module('app.ordenamiento')
    .directive('modalNumeros', modalNumeros);

    modalNumeros.$inject=[];

    function modalNumeros() {
      var directive = {
        templateUrl:"app/modulos/ordenamiento/directives/modal/modal.html",
        controller: numeros,
        controllerAs:"vm"
      }
      return directive;
    }

  numeros.$inject = ['modalService'];

  function numeros(modalService) {
    /***************************/
    /******** VARIABLES ********/
    /***************************/
    var vm = this;


    /***************************/
    /********* Strings *********/
    /***************************/

    /***************************/
    /********* OBJECTS *********/
    /***************************/
    vm.numeros = {};

    /***************************/
    /********* Arrays **********/
    /***************************/
    vm.datos = [];

    /***************************/
    /******** FUNCTIONS ********/
    /***************************/
    vm.guardar = guardar;

    /***************************/
    /****** FUNCTIONALITY ******/
    /***************************/
    function guardar() {
      if (vm.form.$valid) {
        modalService.ordenarNumeros(vm.numeros).then(successOrdenar, error);
      }
      else vm.required = true;

      function successOrdenar(data) {
        vm.datos.push(data);
        $("#ModalNumeros").modal("hide");
        vm.numeros = {};
        vm.required = false;
      }
    }

    function error(data) {
      $.notify(data.message,"error");
      console.log(data);
    }
    

  }

})();