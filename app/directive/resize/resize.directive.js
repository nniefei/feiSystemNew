/**
 * Created by: fei on 2017/9/7.
 */
app.directive('feiResize', function ($window, $rootScope) {
    return{
        restrict: 'A',
        scope:true,
        link:
            function (scope, element, attrs) {
                var w = angular.element($window);
                scope.getSize = function () {
                    return {
                        'h': w.height(),
                        'w': w.width()
                    };
                };
                scope.$watch(scope.getSize, function (newValue, oldValue) {
                    $rootScope.windowHeight = newValue.h;
                    $rootScope.windowWidth = newValue.w;

                }, true);

                w.bind('resize', function () {
                    scope.$apply();
                });
        }
    };
});

