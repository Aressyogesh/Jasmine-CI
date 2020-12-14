// Disable Suite - Add 'x' before 'describe' keyword
// Disable Spec / test - Add 'x' before 'it' keyword

describe('calculator.js', function(){
    
    describe('Calculator', function(){
        let calculator, calculator1, calculator2;
        beforeEach(function(){
            calculator = new Calculator();
            calculator1 = new Calculator();
            calculator2 = new Calculator();
        });

        afterEach(function(){
            
        });
        describe('add()', function(){
            it('should add numbers to total', function(){
                //expect 5 + 5 = 10
                //const calculator = new Calculator();
                calculator.add(5);
                //expect 5 
                expect(calculator.total).toBe(5);
                
            });

        });

        describe('subtract()', function(){
            it('should subtract numbers to total', function(){
                //const calculator = new Calculator();
                calculator.total=30;
                calculator.subtract(5);
        
                //expect 5 
                expect(calculator.total).toBe(25);
        
            });

        });

        
        describe('multiply()', function(){
            it('should multiply numbers to total', function(){
                //const calculator = new Calculator();
                calculator.total=30;
                calculator.multiply(5);
        
                //expect 5 
                expect(calculator.total).toBe(150);
        
            });

        });
        
        describe('division()', function(){
            it('should division numbers to total', function(){
                //const calculator = new Calculator();
                calculator.total=30;
                calculator.division(5);
        
                //expect 5 
                expect(calculator.total).toBe(6);
        
            });

        });
        
    
        describe('various matchers', function(){
            it('should initialize the total', function(){
                //const calculator = new Calculator();
                expect(calculator.total).toBe(0);
                
        
            });
        
            it ('has constructor', function(){
                //const calculator = new Calculator();
                //const calculator2 = new Calculator();
                //calculator.total="0";
                expect(calculator).toEqual(calculator2);
            });
        
            it ('can be instantiated', function(){
                //const calculator = new Calculator();
                //const calculator2 = new Calculator();
                //calculator.total="0";
                expect(calculator).toBeTruthy();
                expect(calculator2).toBeTruthy();
                expect(calculator).toEqual(calculator2);
            });
        
            it ('instantiates unique object', function(){
                //const calculator1 = new Calculator();
                //const calculator2 = new Calculator();
                expect(calculator1).not.toBe(calculator2);
            });
        
            it ('has common operations', function(){
                //const calculator = new Calculator();
                expect(calculator.add).toBeDefined(); //not.toBeUndefined();
                expect(calculator.subtract).toBeDefined();//.not.toBeUndefined();
                expect(calculator.multiply).toBeDefined();//.not.toBeUndefined();
                expect(calculator.division).toBeDefined();//.not.toBeUndefined();
            });
        
            it ('can overwrite total', function(){
                //const calculator = new Calculator();
                calculator.total=null;
                expect(calculator.total).toBeNull();
            });
        
            it ('can contain substring', function(){
                //const calculator = new Calculator();
                expect(calculator.constructor.name).toContain('Cal');
            });
        
            it ('Not A Number NaN', function(){
                //const calculator = new Calculator();
                calculator.total = 20;
                calculator.multiply('a');
                //expect(calculator.constructor.name).toBeNaN();
                expect(calculator.total).toBeNaN();
            });   

        });
    
        
    });
    
});