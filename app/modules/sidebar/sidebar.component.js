/**
 * Created by: fei on date: 2017/10/20.
 */



var appSidebar = {
    restrict: 'E',
    templateUrl: 'app/modules/sidebar/sidebar.component.html',
    controller: ["$rootScope", "tagService", "dataModelService", function ($rootScope, tagService, dataModelService) {
        // 指定this变量
        var sd = this;
        sd.$onInit = function () {
            //获取侧边栏信息
            sd.sidebarList = (dataModelService.getModelInfo())[0];
        };
        sd.$postLink = function () {
            // 修改信息
            sd.changeInfo = function (which) {
                if ("png"===which) {
                    layer.msg("将来，你可以在这里修改个人头像。");
                } else if ("info"===which) {
                    layer.msg("将来，你可以在这里修改个人信息。");
                } else if ("key"===which) {
                    layer.msg("将来，你可以在这里修改个人密码。");
                }
            };
            // 展开菜单
            sd.clickMenuGrade = function(menuGrade) {
                if (menuGrade.childModel.length===0) {
                    tagService.openTag(menuGrade);
                }
            };
        };
    }]
};

app.component("appSidebar", appSidebar);
