var client = require('./mysqlclient.js');

function get(req, res, next) {
    var queryStr = "SELECT * FROM account;";
    client.query(
        queryStr,
        function selectCb(err, results) {
            if (err) {
                next(err);
            }

            if (results.length) {
                var data = [],
                    temp = {},
                    i = 0;

                for (i = 0; i < results.length; i++) {
                    temp = {};
                    temp.id = results[i].id;
                    temp.name = decodeURI(results[i].name);
                    temp.account = decodeURI(results[i].account);
                    temp.password = results[i].password;

                    data.push(temp);
                }
                res.json(data);
            }
        }
    );
}

function save(req, res, next) {
    var name = req.body.name,
        account = req.body.account,
        password = req.body.password,
        queryStr = "insert into account (name, account, password) values (?, ?, ?);",
        params = [];

    params.push(name);
    params.push(account);
    params.push(password);

    client.query(
        queryStr, params,
        function selectCb(err, results) {
            if (err) {
                next(err);
            }

            if (results) {
                res.json(results);
            }
        }
    );
}


function saveName(req, res, next) {
    var queryStr = "insert into beauty (fileName, path, serverType, message, title, alt) values (?, 'images/', '0', 'message', 'title', 'alt');";

    var fileArr = ['64F70FBAE57C61803705901BA26A08FB.jpg', '8BA801973A2745D663BEEF70F916F1AD.jpg'];

    fileArr.forEach(function (item) {
        var params = [],
            i = 0;
        params.push(item);

        client.query(
            queryStr, params,
            function selectCb(err, results) {
                if (err) {
                    next(err);
                }
                console.log(++i);
            }
        );
    });
}

exports.get = get;
exports.save = save;
exports.saveName = saveName;