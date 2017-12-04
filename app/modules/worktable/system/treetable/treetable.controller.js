/**
 * Created by FEI on 2017/10/31.
 */
app.controller("treetableCtrl", function ($scope) {
    //模拟数据
    $scope.moduleLists = [
        {
            name: "模块1",
            id:   "1",
            parentId: "",
            label:"最外层",
            type: "类型一",
            icon: "http://www.placeholder.com/10X10",
            url:  "http://www.placeholder.com/200X100",
            children: [
                {
                    name: "模块6",
                    id:   "6",
                    parentId: "1",
                    label:"第二层",
                    type: "类型二",
                    icon: "http://www.placeholder.com/10X10",
                    url:  "http://www.placeholder.com/200X100",
                    children: [
                        {
                            name: "模块9",
                            id:   "9",
                            parentId: "6",
                            label:"第三层",
                            type: "类型三",
                            icon: "http://www.placeholder.com/10X10",
                            url:  "http://www.placeholder.com/200X100",
                            children: [
                                {
                                    name: "模块11",
                                    id:   "11",
                                    parentId: "9",
                                    label:"第四层",
                                    type: "类型四",
                                    icon: "http://www.placeholder.com/10X10",
                                    url:  "http://www.placeholder.com/200X100",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "模块10",
                            id:   "10",
                            parentId: "6",
                            label:"第三层",
                            type: "类型三",
                            icon: "http://www.placeholder.com/10X10",
                            url:  "http://www.placeholder.com/200X100",
                            children: []
                        }
                    ]
                },{
                    name: "模块7",
                    id:   "7",
                    parentId: "1",
                    label:"第二层",
                    type: "类型二",
                    icon: "http://www.placeholder.com/10X10",
                    url:  "http://www.placeholder.com/200X100",
                    children: []
                },{
                    name: "模块8",
                    id:   "8",
                    parentId: "1",
                    label:"第二层",
                    type: "类型二",
                    icon: "http://www.placeholder.com/10X10",
                    url:  "http://www.placeholder.com/200X100",
                    children: []
                }
            ]
        },
        {
            name: "模块2",
            id:   "2",
            parentId: "",
            label:"最外层",
            type: "类型一",
            icon: "http://www.placeholder.com/10X10",
            url:  "http://www.placeholder.com/200X100",
            children: []
        },
        {
            name: "模块3",
            id:   "3",
            parentId: "",
            label:"最外层",
            type: "类型一",
            icon: "http://www.placeholder.com/10X10",
            url:  "http://www.placeholder.com/200X100",
            children: []
        },
        {
            name: "模块4",
            id:   "4",
            parentId: "",
            label:"最外层",
            type: "类型一",
            icon: "http://www.placeholder.com/10X10",
            url:  "http://www.placeholder.com/200X100",
            children: []
        },
        {
            name: "模块5",
            id:   "5",
            parentId: "",
            label:"最外层",
            type: "类型一",
            icon: "http://www.placeholder.com/10X10",
            url:  "http://www.placeholder.com/200X100",
            children: []
        }
    ];

    /*
    //tree to list
    var listData = [];
    var getJsonList = function(data) {
        for(var i=0; i<data.length; i++){
            listData.push({
                id:       data[i].id,
                parentId: data[i].parentId,
                name:     data[i].name,
                label:    data[i].label,
                type:     data[i].type,
                icon:     data[i].icon,
                url:      data[i].url
            });
            if (data[i].children.length>0) {
                getJsonList(data[i].children);
            }
        }
        return listData;
    };
    getJsonList($scope.moduleLists);

    //操作
    $scope.optionModule = function (which) {
        var choose = $(".tree-table .active-div");
        if (choose.length==1) {
            var chooseItem = JSON.parse(choose.attr("param"));
            angular.forEach(listData, function (local, index) {
                if (chooseItem.id==local.id) {
                    console.log(local);
                }
            });

            if ("parent"===which) {

            } else if ("children"===which) {

            } else if ("mod"===which) {

            } else if ("del"===which) {

            } else if ("relation"===which) {

            }
        } else {
            layer.msg("请选择需要模块！");
        }
    }*/


    $scope.col_defs = [
        {
            field: "name",
            displayName: "模块名称"
        },
        {
            field: "id",
            displayName: "模块编号"
        },
        {
            field: "parentId",
            displayName: "上级模块"
        },
        {
            field: "label",
            displayName: "模块标签"
        },
        {
            field: "icon",
            displayName: "模块图标"
        },
        {
            field: "type",
            displayName: "模块类型"
        },
        {
            field: "url",
            displayName: "模块路径"
        }
    ];
    $scope.tree_data = $scope.moduleLists;
});
