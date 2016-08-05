define(["vue", "html!component/html/myNav"], function (Vue, template) {
    var myNav = Vue.extend({
        template: template
    });
    return myNav
});
