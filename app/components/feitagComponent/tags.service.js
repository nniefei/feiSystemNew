/**
 * Created by: fei on date: 2017/8/16.
 */
app.service("tagService", function ($q, $rootScope) {

    /**
     * 添加标签页前先计算当前已有多少个标签
     * 若已有10个，则不允许再新增，提示用户关闭一个
     * @returns {boolean}
     */
    function checkTagNumIfLimit() {
        if ($rootScope.tagList.tTop.length===10) {
            layer.msg("亲，最多只能打开十个标签页哦！<br/>请关闭一个先。");
            return false;
        } else {
            return true;
        }
    }

    /**
     * 打开一个标签页
     * @param data
     */
    function openTag(data) {
        //新打开的标签页是否属于作业工作台
        $rootScope.ifShowSidebar = "homework" === data.key || "homework" === data.group;//属于作业工作台则默认展示侧边栏
        //检查当前是否已有打开的标签
        var checkIfHaveTag = function () {
            var ifHaveTag = false;
            if ($rootScope.tagList.tTop.length>0) {
                ifHaveTag = true;
            }
            return ifHaveTag;
        };
        //检查当前标签是否已打开
        var checkIfOpened = function () {
            var ifExisted = false;
            $rootScope.tagList.tTop.map(function (local, index) {
                if (data.key===local.key) {
                    ifExisted = true;
                }
            });
            return ifExisted;
        };
        //检查当前标签页所属同一层级下，是否有已打开的其他标签
        var checkLocalLevelIfHaveOtherOpened = function () {
            var ifOtherOpened = false;
            var indexNum = 0;
            $rootScope.tagList.tTop.map(function(local, index){
                if (local.parent===data.parent) {
                    ifOtherOpened = true;
                    indexNum = index;
                }
            });
            return { ifOtherOpened: ifOtherOpened, indexNum: indexNum }
        };
        //新打开的标签页是否是刷新模式
        if ("addModel"===data.model) {//否
            if (checkIfHaveTag()) {//有已打开的标签
                if (checkIfOpened()) {//当前标签已打开
                    refreshChooseTag(data.key);
                } else {//当前标签未打开
                    //判断标签打开的数量是否已经达到上限
                    if (checkTagNumIfLimit()) {
                        $rootScope.tagList.tTop.push(data);
                    }
                }
            } else {//没有已打开的标签
                $rootScope.tagList.tTop.push(data);
            }
        } else if ("freshModel"===data.model) {//是
            if (checkIfHaveTag()) {//有已打开的标签
                if (checkIfOpened()) {//当前标签已打开
                    refreshChooseTag(data.key);
                } else {//当前标签未打开
                    //判断标签打开的数量是否已经达到上限
                    if (checkTagNumIfLimit()) {
                        if (checkLocalLevelIfHaveOtherOpened().ifOtherOpened) {//当前层级下有已打开的其他标签
                            $rootScope.tagList.tTop[checkLocalLevelIfHaveOtherOpened().indexNum] = data;
                        } else {//当前层级下没有已打开的其他标签
                            $rootScope.tagList.tTop.push(data);
                        }
                    }
                }
            } else {//没有已打开的标签
                $rootScope.tagList.tTop.push(data);
            }
        }
    }

    // 刷新指定标签页
    function refreshChooseTag (id) {
        $('.top-tags a[href="#'+id+'"]').tab('show');
    }

    return {
        openTag: openTag,
        refreshChooseTag: refreshChooseTag
    }
});