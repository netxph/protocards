'use strict'

describe('Controller: AreaListCtrl - Areas', function() {

    beforeEach(module('cardsApp'));

    var subject, controller, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('AreaListCtrl', {
            $scope: scope
        });

        subject = scope.areas;
    }));

    it('should define areas', function() {
        expect(subject).toBeDefined();
    });

    it('areas not empty', function() {
        expect(subject.length).toBeGreaterThan(0);
    });

});

describe('Controller: AreaListCtrl - Area', function() {
    beforeEach(module('cardsApp'));

    var subject, controller, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('AreaListCtrl', {
            $scope: scope
        });

        subject = scope.areas[0];
    }));

    it('should define name', function() {
        expect(subject.name).toBeDefined();
    });

    it('name has value', function() {
        expect(subject.name).toBe('Backlog');
    });

    it('should define cards', function() {
        expect(subject.cards).toBeDefined();
    });

    it('cards not empty', function() {
        expect(subject.cards.length).toBeGreaterThan(0);
    });

});

describe('Controller: AreaListCtrl - Card', function() {
    beforeEach(module('cardsApp'));

    var subject, controller, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('AreaListCtrl', {
            $scope: scope
        });

        subject = scope.areas[0].cards[0];
    }));

    it('should define name', function() {
        expect(subject.name).toBeDefined();
    });

    it('name has value', function() {
        expect(subject.name).toBe('Create a design template for cards');
    });

    it('should define description', function() {
        expect(subject.description).toBeDefined();
    });

    it('description has value', function() {
        expect(subject.description).toBe('description goes here');
    });

    it('should define labels', function() {
        expect(subject.labels).toBeDefined();
    });

    it('labels not empty', function() {
        expect(subject.labels.length).toBeGreaterThan(0);
    });

});

describe('Controller: AreaListCtrl - Label', function() {
    beforeEach(module('cardsApp'));

    var subject, controller, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('AreaListCtrl', {
            $scope: scope
        });

        subject = scope.areas[0].cards[0].labels[0];
    }));

    it('should have value', function() {
        expect(subject).toBe('Bug');
    });
});
