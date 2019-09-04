function loadfixtures(){
            //this loads fixtures from a fixtures folder 
            //relative to where SpecRunner.html lives
            jasmine.getFixtures().fixturesPath = "index.html";
        }; 

describe("Fixture Loading Test Suite", function() {
  beforeAll(function(done) {
    $.get(
      "index.html",
      function(html) {
        // Success! load the fixtures.
        var tempDom   = $('<output>').append($.parseHTML(html, null, true)),
            content   = tempDom.find('*');
         
        jasmine.getFixtures().set( index.html() );
         
        done();
      }
    );
  
      
  });
});

describe("Colour blind function", function() {
    loadfixtures('index.html');
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = "index.html";    
    });
    
    describe("Colour Blind on", function() {
        it("should change colours on h1", function(){
            $("#accessibilityOn").on('click');
            expect($('.header-flag-green')).toHaveCSS({color: "#332288"});
        });
    });
});



describe("randomNumber to generate a random number 1 to 4", function(){
    
    
    let min =  1;
    let max = 4;
    
    it("should generate a random number 1 to 4", function(){
        let ranNum = Math.round(Math.random() * (max - min)) + min;
        
        expect(ranNum).toBeGreaterThan(0);
        expect(ranNum).toBeLessThan(5);
    });
});

describe('Game over function', function() {
    
    
    
    
})

