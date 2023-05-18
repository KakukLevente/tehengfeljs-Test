describe('input test', () => {
    it('in: 10', () => {
        let act = isGoodInput(10);
        expect(true).toBe(act);
    });
    it('in: "first"', () => {
        let act = isGoodInput("first");
        expect(false).toBe(act);
    });
    it('in: "second"', () => {
        let act = isGoodInput("second");
        expect(false).toBe(act);
    });
    it('in: 999', () => {
        let act = isGoodInput(999);
        expect(true).toBe(act);
    });
});