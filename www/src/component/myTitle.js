define(["vue", "html!component/html/myTitle"], function (Vue, template) {
    var myTitle = Vue.extend({
        template: template,
        data: function () {
            return {
                title: "Dashboard"
            }
        }
    });
    return myTitle
});
