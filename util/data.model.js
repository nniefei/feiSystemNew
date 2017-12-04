/**
 * Created by: fei on date: 2017/8/16.
 */

app.service("dataModelService", function () {

    //模块配置列表
    function getModelInfo() {
        return [
            {
                key:   "homework",     //模块标识，标签页的唯一标识
                name:  "作业",         //模块名称
                icon:  "fa-home",      //模块图标
                parent:"root",         //模块父级（“addModel”时，打开标签页为新；“freshModel”时为区分那几个模块共同一tag页刷新）
                group: "worktable",    //模块分组
                level: "0",            //模块层级
                model: "addModel",     //模块的打开方式（addModel：添加新标签页；freshModel：在指定位置刷新）
                url:                   //模块模版地址
                        "app/modules/worktable/homework/homework.html",
                data:  {},             //模块打开时传入的数据
                childModel: [          //模块里包含的子模块
                    {
                        key:   "mytask",
                        name:  "我的任务",
                        icon:  "fa-tasks",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "todo",
                                name:  "待处理任务",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "new",
                                        name:  "新任务",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "progress",
                                        name:  "处理中",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "back",
                                        name:  "被退回",
                                        icon:  "fa-leaf",
                                        parent:"todo",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            },
                            {
                                key:   "done",
                                name:  "已处理任务",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "bedone",
                                        name:  "已完成",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "beback",
                                        name:  "已退回",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "beapply",
                                        name:  "任务申请",
                                        icon:  "fa-leaf",
                                        parent:"done",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            },
                            {
                                key:   "trace",
                                name:  "我的追踪",
                                icon:  "fa-folder",
                                parent:"mytask",
                                group: "homework",
                                level: "2",
                                model: "addModel",
                                url:   "",
                                data:  {},
                                childModel: [
                                    {
                                        key:   "attention",
                                        name:  "我的关注",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "take",
                                        name:  "我的参与",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    },
                                    {
                                        key:   "initiate",
                                        name:  "我的发起",
                                        icon:  "fa-leaf",
                                        parent:"trace",
                                        group: "homework",
                                        level: "3",
                                        model: "freshModel",
                                        url:   "app/modules/worktable/test/test.html",
                                        data:  {},
                                        childModel: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key:   "myquery",
                        name:  "我的查询",
                        icon:  "fa-search",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "taskquery",
                                name:  "任务查询",
                                icon:  "fa-leaf",
                                parent:"myquery",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "casequery",
                                name:  "案件查询",
                                icon:  "fa-leaf",
                                parent:"myquery",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    },
                    {
                        key:   "mytip",
                        name:  "我的提醒",
                        icon:  "fa-bell",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "neartimeout",
                                name:  "快超时任务",
                                icon:  "fa-leaf",
                                parent:"mytip",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "alreadytimeout",
                                name:  "已超时任务",
                                icon:  "fa-leaf",
                                parent:"mytip",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    },
                    {
                        key:   "mymail",
                        name:  "我的站内信息",
                        icon:  "fa-envelope",
                        parent:"homework",
                        group: "homework",
                        level: "1",
                        model: "addModel",
                        url:   "",
                        data:  {},
                        childModel: [
                            {
                                key:   "mailbox",
                                name:  "收件箱",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "send",
                                name:  "发信息",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            },
                            {
                                key:   "write",
                                name:  "写信息",
                                icon:  "fa-leaf",
                                parent:"mymail",
                                group: "homework",
                                level: "2",
                                model: "freshModel",
                                url:   "app/modules/worktable/test/test.html",
                                data:  {},
                                childModel: []
                            }
                        ]
                    }
                ]
            },
            {
                key:   "monitoring",
                name:  "监控",
                icon:  "fa-eye",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/monitoring/monitoring.html",
                data:  {},
                childModel: []
            },
            {
                key:   "business",
                name:  "业务",
                icon:  "fa-list-alt",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/business/business.html",
                data:  {},
                childModel: []
            },
            {
                key:   "system",
                name:  "系统",
                icon:  "fa-cog",
                parent:"root",
                group: "worktable",
                level: "0",
                model: "addModel",
                url:   "app/modules/worktable/system/system.html",
                data:  {},
                childModel: []
            }
        ]
    };

    return {
        getModelInfo: getModelInfo
    }
});