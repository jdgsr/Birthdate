(function () {
    angular.module('birthdayApp')
        .controller('BirthdayCtrl', BirthdayController);

    BirthdayController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location'];

    function BirthdayController($log, $state, $rootScope, $scope, $location) {

        vm = this;
        vm.pageTitle ='Birthday  App';

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                vm.pageTitle = toState.data.pageTitle + ' | ' + ' Birthday app';
                console.log(vm.pageTitle);
            }
        });
    };
})();


