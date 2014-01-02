'use strict'

describe('Controller: AreaListCtrl', function() {

    beforeEach(module('cardsApp'));

    var subject, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        subject = $controller('AreaListCtrl', {
            $scope: scope
        });
    }));

    it('should define areas', function() {
       expect(scope.areas).toBeDefined();
    });

});
