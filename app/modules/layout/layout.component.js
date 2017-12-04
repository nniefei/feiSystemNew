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
    }]
};

app.component("appLayout", appLayout);