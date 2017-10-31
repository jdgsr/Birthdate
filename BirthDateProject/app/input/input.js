(function () {

    angular.module('birthdayApp.input')
        .controller('InputCtrl',  InputController);

    InputController.$inject = ['birthdayService']; //used to inject any services or 3 rd party lib

    function InputController(birthdayService) {

        vm = this;
        vm.isError= false;

        vm.storeData = function() {
        	console.log("store data:->"+ vm.name + '---' + vm.birthDate);
        	
        	if(moment(vm.birthDate,"DD-MM-YYYY").isValid()) {
        		birthdayService.storeData(moment(vm.birthDate,"DDMMYYYY").month());
        	}else {
        		vm.isError=true;
        	}
        	
        	vm.name="";
        	vm.birthDate="";
        }

    };
})();