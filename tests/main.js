describe('Require main modules', function(){
    it('has user', function(done){
        require(['User'], function(user){
            expect(user).toEqual(jasmine.any(Object));
            done()
        });
    });
    it('has map', function(done){
        require(['Map'], function(map){
            expect(map).toEqual(jasmine.any(Object));
            done()
        });
    });
    it('has ship', function(done){
        require(['Ship'], function(ship){
            expect(ship).toEqual(jasmine.any(Object));
            done()
        });
    });
});


describe('Soket', function(){
    it('connect', function(done){
        require([
            'socket.io'
        ], function(socketIo){
            var socketConnect = socketIo.connect(),
                socket = socketConnect.socket,
                testString = 'Any string';

            socket.on('connectTest', function (data) {
                expect(data).toEqual(testString);
                done();
            });

            socket.emit('connectTest', testString);


        });
    });
});
