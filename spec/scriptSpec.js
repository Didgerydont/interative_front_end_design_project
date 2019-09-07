describe("randomNumber to generate a random number 1 to 4", function(){
    
    
    let min =  1;
    let max = 4;
    
    it("should generate a random number 1 to 4", function(){
        let ranNum = Math.round(Math.random() * (max - min)) + min;
        
        expect(ranNum).toBeGreaterThan(0);
        expect(ranNum).toBeLessThan(5);
    });
});

