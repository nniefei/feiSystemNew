/**
 * Created by: fei on date: 2017/8/15.
 */
//header组件
var appHead = {
    restrict: 'E',
    bindings: {
        windowWidth:   '<',
        workTableList: '<'
    },
    templateUrl: 'app/modules/header/header.component.html',
    controller: ["$scope", "$state", "tagService", function ($scope, $state, tagService) {
        // 指定this变量
        var vm = this;
        vm.$onInit = function () {
            // 是否是工作状态
            vm.headInit = {
                ifWorking: false
            };
        };
        vm.$postLink = function () {
            // 切换工作状态
            vm.switchWork = function (key) {
                if ("on"===key && vm.headInit.ifWorking) {
                    layer.open({
                        title: "提示",
                        content: "确认是否上线",
                        btn: ["是的", "不，我点错了"],
                        yes: function (index, layero) {
                            vm.headInit.ifWorking = false;
                            $scope.$apply();
                            layer.close(index);
                            //do something
                        },
                        btn2: function (index, layero) {

                        }
                    });
                }
                if ("off"===key && !vm.headInit.ifWorking) {
                    layer.open({
                        title: "提示",
                        content: "确认是否下线",
                        btn: ["是的", "不，我点错了"],
                        yes: function (index, layero) {
                            vm.headInit.ifWorking = true;
                            $scope.$apply();
                            layer.close(index);
                        },
                        btn2: function (index, layero) {

                        }
                    });
                }
            };
            // 搜索
            vm.headSearch = function () {
                layer.msg("什么也没有找到。。。");
            };
            // 帮助
            vm.forHelp = function () {
                layer.msg("需要帮忙么？");
            };
            // 信箱
            vm.mailBox = function () {
                layer.msg("这是一个空信箱！");
            };
            // 登出
            vm.logout = function () {
                layer.open({
                    title: "提示",
                    content: "是否确认退出系统？",
                    btn: ["是", "否"],
                    yes: function (index, layero) {
                        //do something if logout
                        layer.close(index);
                        FEI.log("您在"+(new Date()).toLocaleString()+"退出系统！");
                        $state.go("login");
                    },
                    btn2: function (index, layero) {
                        //do something if not logout
                    }
                })
            };
            // 打开工作台
            vm.openWorkTable = function (data) {
                tagService.openTag(data);
            };
        };
    }]
};

app.component("appHead", appHead);
