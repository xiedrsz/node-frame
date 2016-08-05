define(["vue", "component/myNav", "component/leftSide", "component/myTitle", "component/myTable", "jquery", "bootstrap", "material"],
    function (Vue, myNav, leftSide, myTitle, myTable, $) {
        Vue.config.debug = true;
        Vue.config.devtools = true;

        new Vue({
            el: "body",
            ready: function () {
                $.material.init();
            },
            components: {
                myNav: myNav,
                leftSide: leftSide,
                myTitle: myTitle,
                myTable: myTable
            }
        });
    });
