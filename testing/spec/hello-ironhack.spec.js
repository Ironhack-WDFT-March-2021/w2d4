// test suite - group of tests
describe('Hello ironhack function', function () {
    // spec - specification 
    it('should be a function', function () {
        // expectation - we do sth and check the result - toBe - a matcher
        expect(typeof helloIronhack).toBe('function');
    });
    it('should return a greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    });
});