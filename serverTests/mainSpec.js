//var




describe('Server ping', function(){
    var serverAddress = 'http://localhost:3001';

    it('main page', function(done){
        var request = require('request');
        request(serverAddress, function(error, response, body){
            expect(response.statusCode).toBe(200);
            done();
        });
    });


    //it('session test', function(done){
    //    var request = require('request');
    //
    //    request(serverAddress, function(error, response, body){
    //        done();
    //    });
    //});

    it('socket', function(done){
        var socketIo = require('socket.io-client'),
            socketConnection = socketIo.connect('http://localhost:3001'),
            socket = socketConnection,
            testString = 'ping';

        socket.on('connectTest', function(data){
            expect(data).toBe(testString);
            done();
        });

        socket.emit('connectTest', testString);

    });

});

//describe('Register user', function () {
//
//    it ('incoming connection', function(done) {
//        var socketIo = require('socket.io-client'),
//            socketConnection = socketIo.connect('http://localhost:3001'),
//            socket = socketConnection,
//            testString = 'ping';
//
//
//        var registerUser = require('registerUser');
//
//        socket.on('userLogin', function(data){
//            expect(data).toBe(registerUser);
//            done();
//        });
//
//        socket.emit('userLogin');
//
//    })
//})


