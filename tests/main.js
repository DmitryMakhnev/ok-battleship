require([
    'User',
    'Map',
    'Ship'
], function(u, m, s){
    describe('start test', function(){
        it('test basis models', function(){
            expect(u).toEqual(jasmine.any(Object));
            expect(m).toEqual(jasmine.any(Object));
            expect(s).toEqual(jasmine.any(Object));
        });
    });
});



require([
    'socket'
], function(socketIo){
    describe('test socket', function () {
        var socket = socketIo.connect('http://127.0.0.1');
        var testString = 'Any string';

        socket.on('message', function (data) {
            it('get socket data', function () {
                expect(data).toEqual(testString);
            });
        });
        socket.emit('message', testString);
    });
});



describe('tests complete', function(){
    it('complete?', function(){
        expect(true).toBe(true);
    })
});
