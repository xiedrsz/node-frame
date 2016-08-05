var express = require('express'),
    router = express.Router(),
    account = require('../server/service/account');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/get', account.get);
router.post('/save', account.save);
router.get('/saveName', account.saveName);

module.exports = router;