describe('birthdayCtrl', function () {
  
    describe('isCurrentUrl', function () {
        var BirthdayCtrl, $location, $scope;

        beforeEach(module('birthdayApp'));

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            BirthdayCtrl = $controller('BirthdayCtrl', {$location: $location, $scope: $scope});
        }));

        it('should pass a dummy test', inject(function () {
            expect(BirthdayCtrl).toBeTruthy();
        }));
    });
});
