(function () {
    angular.module('birthdayApp')
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/birthday-input');
        }])
})();

