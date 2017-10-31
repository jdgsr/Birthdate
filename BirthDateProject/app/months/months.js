(function () {

    angular.module('birthdayApp.months')
    .controller('MonthCtrl',  MonthController);

    MonthController.$inject = ['birthdayService'];

    function MonthController(birthdayService) {

        vm = this;

        //API
       
                birthdayService.getData().then(function(data) {
                     vm.birthCount = data;
                 });
        

         vm.sortBy = function(param) {
            if(param === "numerical" ) {
                 birthdayService.getData().then(function(data) {
                     vm.birthCount = data.sort(function (a, b) {
                     var x = a['count']; var y = b['count'];
                            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                     });  
                 });
                
            } else if(param === "chronological" ) {
                 birthdayService.getData().then(function(data) {
                     vm.birthCount = data.sort(function (a, b) {
                     var x = a['index']; var y = b['index'];
                            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                     });  
                 });
            }

         }
    
    };

})();