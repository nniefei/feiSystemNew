/**
 * Created by: fei on date: 2017/8/15.
 */

//基于bootstrap的一个标签页插件
app.directive("feiTags", function () {
    return{
        restrict: 'E',
        require: 'ngModel',
        scope: {
            tagInfo: "=tagList"
        },
        templateUrl: "app/directive/feitags/tags.html",
        controller: function ($scope, $rootScope) {
            //切换标签页
            $scope.toggleSidebar = function () {
                $rootScope.ifShowSidebar = !$rootScope.ifShowSidebar;
            };
            //选择标签页
            $scope.chooseTag = function (tag, index) {
                //激活的标签页是否属于作业工作台
                $rootScope.ifShowSidebar = "homework" === tag.key || "homework" === tag.group;//属于作业工作台则默认展示侧边栏
            };
            //删除标签页
            $scope.delTag = function (tag) {
                console.log(tag);
                $scope.tagInfo.map(function (x, index) {
                    if (tag.key === x.key) {
                        if (index===(($scope.tagInfo).length-1)) {
                            ($scope.tagInfo).splice(index,1);
                            var activeId = $scope.tagInfo[index-1]===undefined?"":$scope.tagInfo[index-1].key;
                            if (""!==activeId) {
                                setTimeout(function refresh() {
                                    $('.top-tags a[href="#'+activeId+'"]').tab('show');
                                },0);
                                $scope.chooseTag($scope.tagInfo[index-1], activeId);
                            } else {
                                $rootScope.ifShowSidebar = true;
                            }
                        } else {
                            ($scope.tagInfo).splice(index,1);
                        }
                    }
                });
                $rootScope.tagList.tTop.map(function (y, index) {
                    if (tag.key === y.key) {
                        if (index===(($rootScope.tagList.top).length-1)) {
                            ($rootScope.tagList.top).splice(index,1);
                            var activeId = $scope.tagInfo[index-1]===undefined?"":$scope.tagInfo[index-1].key;
                            if (""!==activeId) {
                                setTimeout(function refresh() {
                                    $('.top-tags a[href="#'+activeId+'"]').tab('show');
                                },0);
                                $scope.chooseTag($scope.tagInfo[index-1], activeId);
                            } else {
                                $rootScope.ifShowSidebar = true;
                            }
                        } else {
                            ($rootScope.tagList.top).splice(index,1);
                        }
                    }
                });
            };
        }
    }
});