var kraken = require('kraken-js'),
    app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    options = {
        onconfig: function (config, next) {
            //any config setup/overrides here
            next(null, config);
        }
    },
    port = process.env.PORT || 8000;


app.use(kraken(options));

io.on('connection', function(socket){
  console.log('a user connected');
});


app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});
