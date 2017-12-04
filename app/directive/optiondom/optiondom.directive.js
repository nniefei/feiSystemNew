/**
 * Created by fei on 2017/9/11.
 */

/**
 * 主要用作侧边栏使用
 * toggle当前a标签的下一个兄弟ul元素
 * 并隐藏其他a标签的下一个兄弟ul元素
 */
app.directive("dropDown", function ($window) {
    return{
        restrict: 'A',
        scope:{
            data: "=dropDownData"
        },
        link: function (scope, elems, attrs) {
            elems.bind('click', function (e) {
                if (undefined===scope.data) {
                    elems.next().slideToggle("fast", function () {
                        $.each($("a"), function (index, local) {
                            if (attrs.id===local.id) {
                                $("a[id!="+attrs.id+"]+ul").slideUp("fast");
                            }
                        });
                    });
                } else if (0!==scope.data.childModel.length && "3"!==scope.data.level) {
                    elems.next().slideToggle("fast", function () {
                        $.each($("a"), function (index, local) {
                            if (attrs.id===local.id) {
                                if ("1"===scope.data.level) {
                                    $("a[id!="+attrs.id+"]+ul").slideUp("fast");
                                }
                                if ("2"===scope.data.level) {
                                    $("a[id!="+attrs.id+"][id!="+scope.data.parent+'-sidebar'+"]+ul").slideUp("fast");
                                }
                            }
                        });
                    });
                }
                scope.$apply();
            });
        }
    }
});

/**
 * 点击后显示下一个兄弟元素
 */
app.directive("clickShownext", function ($window) {
    return{
        restrict: 'A',
        scope:true,
        link: function (scope, elems, attrs) {
            elems.bind('click', function () {
                elems.next().show();
                scope.$apply();
            });
        }
    }
});

/**
 * 设置当前元素只能点击一次
 * 点击后禁用当前元素
 */
app.directive("onlyClickOnce", function ($window) {
    return{
        restrict: 'A',
        scope:true,
        link: function (scope, elems, attrs) {
            elems.bind('click', function () {
                elems.prop({disabled: true});
                scope.$apply();
            });
        }
    }
});

/**
 * 点击隐藏自己
 * 显示并解除上一个兄弟节点的禁用
 */
app.directive("clickHideselfShowprev", function ($window) {
    return{
        restrict: 'A',
        scope:true,
        link: function (scope, elems, attrs) {
            elems.bind('click', function () {
                elems.hide();
                elems.prev().show();
                elems.prev().prop({disabled: false});
                scope.$apply();
            });
        }
    }
});

