var mysql = require('mysql');

// 创建连接池
var pool = mysql.createPool({
    user: 'root',
    password: 'vf',
    database: 'test'
});

// 查询语句
/**
 * @Param queryStr 查询语句
 * @Param params 参数
 * @Param callback 回调函数
 */
var query = function (queryStr, params, callback) {
    var callback = typeof params == 'function' ? params : callback || function (err, result) {
            if (err)
                throw err;
            console.log(result);
        },
        params = typeof params == 'object' ? params : [];

    pool.getConnection(function (err, connection) {
        if (err)
            throw err;

        connection.query(queryStr, params, function (err, result) {
            connection.release();
            callback(err, result);
        });
    });
}

exports.query = query;