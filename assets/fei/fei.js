/**
 * COMMON UTIL
 * author: 东尧
 * version: 1.0.0
 * date: 2017-08-10
 */ 

var fei = (function(w, d){

		"use strict";

		w.FEI = {

            /**
			 * 自定义打印方法，接管console.log
             **/
			log: function () {
					var args = Array.prototype.slice.call(arguments);
					args.unshift("FEI INFO：");
					console.log.apply(console, args);
				},

            /**
			 * 加载动画
			 * 代码截选自微信
             **/
			loading: {
				show: function (tip) {
					var loading = d.createElement("div");
					loading.className = "weui_load";
					loading.innerHTML = '<div class="weui_toast_transparent"></div>' +//this html from weui start
										'<div class="weui_toast">' +
											'<div class="weui_loading">' +
												'<div class="weui_loading_leaf weui_loading_leaf_0"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_1"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_2"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_3"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_4"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_5"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_6"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_7"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_8"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_9"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_10"></div>' +
												'<div class="weui_loading_leaf weui_loading_leaf_11"></div>' +
											'</div>' +
											'<p style="margin:70% auto 0;">'+tip+'</p>' +
										'</div>'; //this html from weui end
					d.body.appendChild(loading);
				},
				hide: function () {
                    d.body.removeChild(d.querySelector(".weui_load"));
				}
				
			},

            /**
			 * 数组去重(元素非对象)
			 * var array = [1,2,3,4,5,6,6,5,4,3,2,1];
             * @param array
             * @returns {[null]}
             **/
			distinctArray: function (array) {
								var result = [array[0]]; //结果数组
								//从第二项开始遍历
								for (var i = 1; i < array.length; i++) {
									//如果当前数组的第i项在当前数组中第一次出现的位置不是i，
									//那么表示第i项是重复的，忽略掉。否则存入结果数组
									if (array.indexOf(array[i]).toString() === i.toString()) {
										result.push(array[i]);
									}
								}
								return result;
							},

            /**
			 * 数组JSON去重(元素非对象)
			 * var json = [
							 {key:"key1",value:"value1"},
							 {key:"key2",value:"value2"},
							 {key:"key3",value:"value3"},
							 {key:"key4",value:"value4"},
							 {key:"key1",value:"value1"}
						 ]
             * @param array
             * @returns {[null]}
             **/
			distinctArrayJSON: function (array) {
									var result = [array[0]]; //结果数组
									for (var i = 0; i < array.length; i++) {
										var ifPush = true;
										for (var j = 0; j < result.length; j++) {
											if (array[i].key === result[j].key && array[i].value === result[j].value) {
												ifPush = false;
											}
										}
										if (ifPush) {
											result.push(array[i]);
											ifPush = true;
										}
									}
									return result;
								},


            /**
			 * 判断数组里是否包含指定元素(元素非对象)
             * @param array
             * @param param
             * @returns {boolean}
             **/
            ifInArray: function (array, param) {
								for (var i=0; i<array.length; i++) {
									if (param.toString() === array[i].toString() || this.ifContainStr(array[i], param)) {
										return true;
									}
								}
								return false;
            			},


            /**
			 * 判断字符串里是否包含某字符
             * @param param
             * @param str
             **/
			ifContainStr: function (param, str) {
            	if (null!==str && undefined!==str && ''!==str && -1===(str.toString()).indexOf(param.toString())) {
            		return false;
				} else if (null===str || undefined===str || ''===str) {
                    return false;
				} {
            		return true;
				}
			},

            /**
             * 获取URL中不同部分
             * 例：http://www.w3school.com.cn/htmldom/index.asp?a=1&b=2#1
             * window.location.href        返回：完整地址栏 http://www.w3school.com.cn/htmldom/index.asp?a=1&b=2#1
             * window.location.protocol    返回：协议部分 http:
             * window.location.host        返回：主机部分 www.w3school.com.cn
             * window.location.port        返回：“” 如果采用默认的80端口(update:即使添加了:80)，那么返回值并不是默认的80而是空字符
             * window.location.pathname    返回：文件路径 htmldom/index.asp
             * window.location.search      返回：参数部分 ?a=1&b=2
             * window.location.hash        返回：锚点 #1
             * @param whichPart
             **/
            getUrlPart: function getUrlPart (whichPart) {
				return window.location.whichPart;
			},

			/**
			 * 获取URL内参数
			 * @param name 参数名
			 * @returns {*}
			 **/
			getParamFromUrl: function getParamFromUrl (name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r =   window.location.search.substr(1).match(reg);
				if (r != null){
					return unescape(r[2]);
				}
				return null;
			},

            /**
             * 更改页面标题名
             * 主要针对IOS系统处理(document.title在IOS上无效)
             * @param forUpdateName
             **/
            updatePageName: function updatePageName (forUpdateName) {
				var body = document.getElementsByTagName('body')[0];
				document.title = forUpdateName;
				var iframe = document.createElement("iframe");
				iframe.style.display="none";
				// iframe.setAttribute("src", "http://named.cn/page/take/img/icon_phone.png");
				iframe.setAttribute("src", "http://via.placeholder.com/1x1");
				var d = function() {
					setTimeout(function() {
						iframe.removeEventListener('load', d);
						document.body.removeChild(iframe);
					}, 0);
				};
				iframe.addEventListener('load', d);
				document.body.appendChild(iframe);
			},

            /**
             * 删除左右两端的空格
             **/
            trimAll: function trimAll(str) {
				return str.replace(/(^\s*)|(\s*$)/g, '');
			},

			/**
			 * 删除左边的空格
			 **/
            trimLeft: function trimLeft(str) {
				return str.replace(/(^\s*)/g, '');
			},

			/**
			 * 删除右边的空格
			 **/
            trimRight: function trimRight(str) {
				return str.replace(/(\s*$)/g, '');
			},
			
			/**
			 * 获取浏览器或设备名称  以及版本号
			 * DEVICE.isIpad             @return:Boolean    是否是：ipad
			 * DEVICE.isIphone           @return:Boolean    是否是：ipbone
			 * DEVICE.isAndroid          @return:Boolean    是否是：android
			 * DEVICE.isIe               @return:Boolean    是否是：ie
			 * DEVICE.isFirefox          @return:Boolean    是否是：firefox
			 * DEVICE.isChrome           @return:Boolean    是否是：chrome
			 * DEVICE.isOpera            @return:Boolean    是否是：opera
			 * DEVICE.isSafari           @return:Boolean    是否是：safari
			 * 
			 * DEVICE.isPc               @return:Boolean	是否是：pc
			 * DEVICE.isMac              @return:Boolean	是否是：mac
			 * DEVICE.isLinux            @return:Boolean	是否是：linux
			 * DEVICE.isMobile           @return:Boolean	是否是：移动设备，非pc
			 * 
			 * DEVICE.ver                @return:Number   浏览器版本或  ipad/iphone/android系统版本
			 **/
			getDevice: function getDevice() {
				var DEVICE = {};
				var Sys = {};
				var ua = navigator.userAgent.toLowerCase();
				var s;
				(s = ua.match(/ipad; cpu os ([\d_]+)/)) ? Sys.ipad = s[1].replace(/_/g, "."):
					(s = ua.match(/iphone os ([\d_]+)/)) ? Sys.iphone = s[1].replace(/_/g, ".") :
					(s = ua.match(/android[ \/]([\d.]+)/)) ? Sys.android = s[1] :
					(s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
					(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
					(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
					(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
					(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
					(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : Sys._ = 0;

				DEVICE.isIpad = (Sys.hasOwnProperty("ipad"));
				DEVICE.isIphone = (Sys.hasOwnProperty("iphone"));
				DEVICE.isAndroid = (Sys.hasOwnProperty("android"));
				DEVICE.isIe = (Sys.hasOwnProperty("ie"));
				DEVICE.isFirefox = (Sys.hasOwnProperty("firefox"));
				DEVICE.isChrome = (Sys.hasOwnProperty("chrome"));
				DEVICE.isOpera = (Sys.hasOwnProperty("opera"));
				DEVICE.isSafari = (Sys.hasOwnProperty("safari"));

				DEVICE.ver = 0;
				var ver;
				for (var key in Sys) {
					if (Sys.hasOwnProperty(key)) {
						ver = Sys[key];
					}
				}
				ver = ver.split(".");
				var _ver = [];
				for (var i = 0, l = ver.length; i < l; i++) {
					if (i >= 2) {
						break;
					}
					_ver.push(ver[i]);
				}
				_ver = _ver.join(".");
				DEVICE.ver = _ver;

				DEVICE.isMobile = (DEVICE.isAndroid || DEVICE.isIpad || DEVICE.isIphone);

				var p = navigator.platform;
				var win = p.indexOf("Win") === 0;
				var mac = p.indexOf("Mac") === 0;
				var x11 = (p == "X11") || (p.indexOf("Linux") === 0);

				DEVICE.isPc = (win || mac || x11);
				DEVICE.isMobile = !(win || mac || x11);
				DEVICE.isMac = mac;
				DEVICE.isWin = win;
				DEVICE.isLinux = x11;
				
				return DEVICE;
			}
		}
})(window, document);