/**
 * Created by: fei on date: 2017/8/29.
 */



app.controller("loginCtrl", function($scope, $state) {
    //初始化页面数据
    $scope.login = {
        username: "",
        password: "",
        checkcode: ""
    };

    // 登录
    $scope.loginSys = function () {
        if (""===$scope.login.username) {
            layer.msg("用户名不能为空！");
            $("#username").focus();
        } else {
            $state.go("worktable");
        }
    }
});