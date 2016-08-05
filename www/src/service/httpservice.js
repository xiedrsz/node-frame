define(["jquery"], function ($) {
    var http = {},
        serverUrl = "";

    // 服务器地址
    http.url = {
        getAccount: serverUrl + "getAccount"
    };

    // Get方法
    /**
     * @Param url 地址
     * @Param succFun 成功时的回调
     */
    http.get = function (url, succFun) {
        var url = serverUrl + url,
            succFun = succFun || function (res) {
                console.log(res);
            };

        $.get(url, succFun);
    };

    // Post方法
    /**
     * @Param url 地址
     * @Param data 要提交的数据对象
     * @Param succFun 成功时的回调
     */
    http.post = function (url, data, succFun) {
        var url = serverUrl + url,
            data = data || {},
            succFun = succFun || function (res) {
                console.log(res);
            };

        $.post(url, data, succFun);
    }

    return http;
});