(function () {
    angular.module('birthdayApp.input')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('input', {
                url: '/birthday-input',
                views: {
                    "main": {
                        controller: 'InputCtrl as vm',
                        templateUrl: 'input/input.tpl.html'
                    }
                },
                data: {pageTitle: 'Birthday Input'}
            });
        }])
})();