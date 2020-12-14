describe('main.js', function(){
    describe('calculate()', function(){
         xit('validate expression', function(){
            
         });
         xit('calls add', function(){

         });
         xit('calls subtract', function(){

         });
         xit('calls multiply', function(){

         });
         xit('calls division', function(){

         });
         xit('validate operation', function(){

         });
         xit('calls updateResult', function(){

         });

       
    });
    describe('updateResult()', function() {
        //let element;
        beforeAll(function(){
            // Executed ONCE before all specs are executed
            element = document.createElement('div');
            element.setAttribute('id','result');
            document.body.appendChild(element);
            this.element = element;
        }); 
        afterAll(function(){
            //// Executed ONCE after all specs are executed
           //const element = document.getElementById('result');  
           document.body.removeChild(this.element);   
        });

        it('adds result to DOM element', function(){
            
            updateResult('5');
            expect(this.element.innerText).toBe('5');
        });

    });
});