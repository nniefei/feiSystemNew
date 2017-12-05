/**
 * Created by: fei on date: 2017/12/4.
 */



var appLayout = {
    restrict: 'E',
    bindings: {
        windowWidth: '<',
        ifShowSidebar:'<',
        workTableList: '<',
        tagList: '<'
    },
    templateUrl: 'app/modules/layout/layout.component.html',
    controller: [function () {
        var al = this;
        al.$onInit = function () {

        };
        al.refreshTagList = function () {
            setTimeout(function refresh() {
                $('.top-tags li a:last').tab('show');
            },0);
        };
    }]
};

app.component("appLayout", appLayout);