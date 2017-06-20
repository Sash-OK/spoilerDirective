(function () {
    var app = angular.module('app', []);

    app.controller('MainCtrl', MainCtrl);

    app.directive('mySpoiler', mySpoiler);

    function mySpoiler() {
        return {
            scope: {},
            restrict: 'A',
            link: function ($scope, $element, $attr) {
                var activeClass = $attr.activeClass,
                    $spoilerLink = $element.find('[data-spoiler-lnk]'),
                    $spoilerBody = $element.find('[data-spoiler-body]');

                $spoilerLink.on('click',function (e) {
                    e.preventDefault();
                    $spoilerLink.not(this).removeClass(activeClass);
                    angular.element(this).toggleClass(activeClass);
                    $spoilerBody.not(angular.element(this).siblings($spoilerBody)).slideUp(300);
                    angular.element(this).siblings($spoilerBody).slideToggle(300);
                });
            }
        }
    }

    function MainCtrl() {
        var _ctrl = this;
        _ctrl.data = 'Hello! I am content';
    }

})();

$(function () {
    angular.bootstrap($('body'), ['app']);
});