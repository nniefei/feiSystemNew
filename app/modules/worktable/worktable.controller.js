/**
 * Created by: fei on date: 2017/8/16.
 */
//工作台主controller
app.controller("worktableCtrl", ["$q", "$scope", "$rootScope", "tagService", "dataModelService", function ($q, $scope, $rootScope, tagService, dataModelService) {

    var wtc = this;

    //点击图片
    wtc.personPng = function () {
        layer.msg("将来，你可以吧自己的图片放在这里。。。");
    };
    //点击信息维护
    wtc.personInfo = function () {
        layer.msg("将来，你可以点击这里维护自己的信息。。。");
    };
    //点击修改密码
    wtc.personPwd = function () {
        layer.msg("将来，你可以点击这里维护自己的密码。。。");
    };

    //监听ng-repeat渲染完成 刷新tag页
    $scope.$on("ngrepeat-flag", function (e, data) {
        setTimeout(function refresh(data) {
            $('.top-tags li a:last').tab('show');
        },0);
    });

    // 页面初始化
    var init = function () {
        // 默认展示侧边栏
        $rootScope.ifShowSidebar = true;
        // 初始化工作台列表
        $rootScope.workTableList = dataModelService.getModelInfo();
        // 初始化标签页
        $rootScope.tagList = {
            tTop: [$rootScope.workTableList[0]]
        };
    }();

}]);