/**
 * Created by: fei on date: 2017/8/17.
 */

// ng-repeat 迭代完成后事件
app.directive("ngrepeatFinish", function () {
    return{
        restrict: 'A',
        link: function (scope, elems, attrs) {
            if(scope.$last){
                //send to parent
                scope.$emit('ngrepeat-flag', scope.tag);
                //send to child
                scope.$broadcast('ngrepeat-flag', scope.tag);
            }
        }
    }
});