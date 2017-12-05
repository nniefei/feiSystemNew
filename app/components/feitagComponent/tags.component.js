/**
 * Created by: fei on date: 2017/8/15.
 */



var feiTags = {
    restrict: 'E',
    bindings: {
        tagList: "<",
        refreshTagList: "&"
    },
    templateUrl: "app/components/feitagComponent/tags.component.html",
    controller: ["$rootScope", function ($rootScope) {
        var ft = this;

        ft.$onInit = function () {

        };

        ft.$postLink = function () {
            //切换标签页
            ft.toggleSidebar = function () {
                $rootScope.ifShowSidebar = !$rootScope.ifShowSidebar;
            };
            //选择标签页
            ft.chooseTag = function (tag, index) {
                //激活的标签页是否属于作业工作台
                $rootScope.ifShowSidebar = "homework" === tag.key || "homework" === tag.group;//属于作业工作台则默认展示侧边栏
            };
            //删除标签页
            ft.delTag = function (tag) {
                console.log(tag);
                ft.tagList.map(function (x, index) {
                    if (tag.key === x.key) {
                        if (index===((ft.tagList).length-1)) {
                            (ft.tagList).splice(index,1);
                            var activeId = ft.tagList[index-1]===undefined?"":ft.tagList[index-1].key;
                            if (""!==activeId) {
                                setTimeout(function refresh() {
                                    $('.top-tags a[href="#'+activeId+'"]').tab('show');
                                },0);
                                ft.chooseTag(ft.tagList[index-1], activeId);
                            } else {
                                $rootScope.ifShowSidebar = true;
                            }
                        } else {
                            (ft.tagList).splice(index,1);
                        }
                    }
                });
                $rootScope.tagList.tTop.map(function (y, index) {
                    if (tag.key === y.key) {
                        if (index===(($rootScope.tagList.top).length-1)) {
                            ($rootScope.tagList.top).splice(index,1);
                            var activeId = ft.tagList[index-1]===undefined?"":ft.tagList[index-1].key;
                            if (""!==activeId) {
                                setTimeout(function refresh() {
                                    $('.top-tags a[href="#'+activeId+'"]').tab('show');
                                },0);
                                ft.chooseTag(ft.tagList[index-1], activeId);
                            } else {
                                $rootScope.ifShowSidebar = true;
                            }
                        } else {
                            ($rootScope.tagList.top).splice(index,1);
                        }
                    }
                });
            };
        };
    }]
};

app.component("feiTags", feiTags);