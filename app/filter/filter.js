/**
 * Created by fei on 2017/9/13.
 */
/**
 * 是否过滤，1是，0否
 */
app.filter("oneORzero", function () {

    return function(input) {
        if (""!==input && undefined!==input && null!==input) {
            if (1===parseInt(input)) {
                return "是";
            }
            if (0===parseInt(input)) {
                return "否";
            }
        }
    }

});
/**
 * 过滤主页姓名
 */
app.filter("filterName", function () {

    return function(input) {
        if (""!==input && undefined!==input && null!==input) {
            return "欢迎您，"+input;
        } else {
            return "请登录"
        }
    }

});

