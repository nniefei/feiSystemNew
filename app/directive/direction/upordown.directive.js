/**
 * Created by fei on 2017/9/15.
 */

//上下箭头切换
app.directive("upOrDown", function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elems, attrs) {
             elems.bind('click', function () {
                 $((elems.children())[0]).toggle();
                 $((elems.children())[1]).toggle();
                 scope.$apply();
             });
         }
    }
});

