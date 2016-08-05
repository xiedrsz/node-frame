define(["vue", "html!component/html/myTable", "http", "jsSHA"], function (Vue, template, http, jsSHA) {

    var myTable = Vue.extend({
        template: template,
        data: function () {
            var records = [];
            http.get("get", function (res) {

                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    records.push(res[i]);
                }
            });

            return {
                records: records,
                showerr: false,
                message: "",
                name: "",
                account: "",
                password: ""
            }
        },
        methods: {
            add: function () {
                var checkData = {};
                checkData.name = this.name;
                checkData.account = this.account;
                checkData.password = this.password;

                // 非空校验
                for (var item in checkData) {
                    if (checkData[item] == "") {
                        this.message = item;
                        this.showerr = true;
                        return;
                    }
                }

                /*var shaObj = new jsSHA(checkData.password, 'TEXT');
                checkData.password = checkData.password.substring(0, 2) + shaObj.getHash('SHA-1', 'HEX'),
                    thisTmp = this;*/

                var thisTmp = this;

                this.showerr = false;

                http.post("save", checkData, function (res) {
                    thisTmp.records.push(checkData);
                    thisTmp.name = "";
                    thisTmp.account = "";
                    thisTmp.password = "";
                });
            }
        }
    });
    return myTable
});