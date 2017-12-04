/**
 * Created by: fei on date: 2017/8/15.
 */

// create main app module
var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'util.module'
]);

// route config
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('login');

    $stateProvider

        .state('login', {
            url: '/login',
            controller: 'loginCtrl',
            templateUrl: 'app/modules/login/login.html'
        })

        .state('worktable', {
            url: '/worktable',
            controller: 'worktableCtrl',
            controllerAs: 'wtc',
            templateUrl: 'app/modules/worktable/worktable.html'
        });
});

// app run config
app.run(function ($rootScope, $log) {
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $log.debug('successfully changed states') ;
            
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
        
	$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
		$log.error('The request state was not found: ' + unfoundState);
	});
	
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
		$log.error('An error occurred while changing states: ' + error);
		
		$log.debug('event', event);
		$log.debug('toState', toState);
		$log.debug('toParams', toParams);
		$log.debug('fromState', fromState);
		$log.debug('fromParams', fromParams);
	});
});


/*
// http拦截器
app.factory('httpInterceptor', function ($q) {
    //请求拦截记数
    var requestCount = 0;
    //拦截请求，判断是否需要显示加载动画
    var checkIfNeedLoading = function (url) {
        // return /claimsystem/.test(url);
        return /github/.test(url);
    };
    return {
        request: function (config) {//请求拦截
            config.requestTimestamp = new Date().getTime();//记录请求发送时间
            if (checkIfNeedLoading(config.url)) {
                requestCount++;
                FEI.loading.show('Loading...');
            }
            return config;
        },
        requestError: function (config) {//请求错误拦截
            return $q.reject(config);
        },
        response: function (response) {//响应拦截
            response.config.responseTimestamp = new Date().getTime();//记录请求响应时间
            if (checkIfNeedLoading(response.config.url) && --requestCount <= 0) {
                FEI.loading.hide();
            }
            return response;
        },
        responseError: function (response) {//响应异常拦截
            response.config.responseTimestamp = new Date().getTime();//记录请求响应时间
            if (checkIfNeedLoading(response.config.url) && --requestCount <= 0) {
                FEI.loading.hide();
            }
            return $q.reject(response);
        }
    };
});
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);*/
