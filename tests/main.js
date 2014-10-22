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


describe('test', function(){
    it('q', function(){
        expect(2).toEqual(2);
    })
});

