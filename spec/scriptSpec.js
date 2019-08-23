describe("Colour blind function", function() {
    var spyEvent;
    
    describe("Colour Blind on", function() {
        it("should change colours on h1", function(){
            spyEvent = spyOn($("#accessibilityOn"), 'click');
            expect($('header-flag-green').toHaveCss({color: "#332288"}));
        });
    });
});