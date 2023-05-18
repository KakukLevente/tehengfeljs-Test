describe('Henger felszínének számítása',()=>{
    it ('5,10 inputra 471.23889803846896 felszín',()=>{
        let act= calcSurface(5,10);
        expect(act).toBe(471.23889803846896)
    })
    
    it('22,10 inputra4423.362456254428 felszín',()=>{
        let act= calcSurface(22,10);
            expect(act).toBe(4423.362456254428)
    })

    it('310,11 inputra 625239.7699174406 felszín',()=>{
        let act= calcSurface(310,11);
            expect(act).toBe(625239.7699174406)
    })
})