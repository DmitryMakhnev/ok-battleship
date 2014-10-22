require([
    'User', 'Game', 'Map', 'Ship', 'socket'
], function(User, Game, Map, Ship, socket){
    //console.log(socket);
    var _socket = socket('http://localhost');

    var testString = 'Any string';

    _socket.on('message', function (data) {
        //it('get socket data', function () {
        //    expect(data).toEqual(testString);
        //});
        console.log(data);
    });
    _socket.emit('message', testString);
});