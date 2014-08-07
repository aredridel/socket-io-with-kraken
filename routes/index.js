//route controller
'use strict';
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.sendfile('./public/templates/index.html');
    });
};
