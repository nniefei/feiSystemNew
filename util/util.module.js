/**
 * Created by: fei on date: 2017/8/30.
 */

var utilModule = angular.module('util.module', []);

utilModule.service("httpService", function ($http, $q) {
    /**
     * 检查API请求路径及请求参数是否正常
     * @param url
     * @param data
     * @returns {boolean}
     */
    function checkParam (url, data) {
        if (!angular.isDefined(url) || !angular.isDefined(data)) {
            layer.msg("API请求路径或请求参数为空！", {
                time: 3000
            });
            return false;
        } else {
            return true;
        }
    }

    /**
     * doPost
     * @param apiUrl
     * @param reqParam
     */
    function doPost (apiUrl, reqParam) {
        if (checkParam(apiUrl, reqParam)) {
            return $http({
                url:     apiUrl,
                data:    JSON.stringify(reqParam),
                method:  'POST',
                headers: {'Content-Type': 'application/json; charset=UTF-8'}
            }).then(function (res) {
                if (res) {
                    return res;
                } else {
                    layer.msg(res, {
                        time: 3000
                    });
                }
            });
        }
    }

    /**
     * doGet
     * @param apiUrl
     * @param reqParam
     */
    function doGet (apiUrl, reqParam) {
        if (checkParam(apiUrl, reqParam)) {
            return $http({
                url:     apiUrl,
                params:   reqParam,
                method:  'GET',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
            }).then(function (res) {
                if (res) {
                    return res;
                } else {
                    layer.msg(res, {
                        time: 3000
                    });
                }
            });
        }
    }

    return{
        doPost: doPost,
        doGet:  doGet
    }
});