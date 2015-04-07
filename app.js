var app = angular.module('JoesApp', []);

app.controller('JoesController', function ($scope, $interval) {

    $scope.card = {
        number: null,
        type: 'Visa',
        ccv: null
    };

    $scope.submitPayment = function (card) {
        console.log('Bouts to do some crazy AJAX with', card);
    };

    $scope.message = 'Hello Sam!';

});

app.directive('error', function () {

    return {
        restrict: 'E',
        template: '<span style="color:red;" ng-transclude></span>',
        transclude: true
    };

});