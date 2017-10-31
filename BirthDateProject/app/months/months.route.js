(function () {
    angular.module('birthdayApp.months')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('months', {
                url: '/birthday-months',
                views: {
                    "main": {
                        controller: 'MonthCtrl as vm',
                        templateUrl: 'months/months.tpl.html'
                    }
                },
                data: {pageTitle: 'Birthday Months'}
            });
        }])
})();