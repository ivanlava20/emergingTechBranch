/*
var myVar = null;   
var myVar2 = null; // Declare a global variable
*/

function checkscope() {
    var myVar = null   // Declare a local variable
    myVar = 12
   
    return myVar
    //document.write(myVar)
  }
  
  function arithmetic( ) {
    var a = 33;
    var b = 10;
    var c = "Test";
    
    var addition = a + b
    var subtraction = a - b
    var multiplication = a * b
    var division = a / b
    var modulo = a % b
    var increment = ++a
    var decrement = --a
    var additionWithString = a + c * b
    
    
    document.write("SUM: " + addition + "<br>")
    document.write("DIFFERENCE: " + subtraction + "<br>")
    document.write("PRODUCT: " + multiplication + "<br>")
    document.write("QUOTIENT: " + division + "<br>")
    document.write("REMAINDER: " + modulo + "<br>")
    document.write("INCREMENT: " + increment + "<br>")
    document.write("DECREMENT: " + decrement)
    document.write("ADDITION WITH STRING: " + additionWithString)
    
  }
  
  function comparison( ) {
    var a = 10;
    var b = 10;
    
    var equal = a === b
    var notEqual = (a != b)
    var greaterThan = (a > b)
    var lessThan = (a < b)
    var greaterThanOrEqual = (a >= b)
    var lessThanOrEqual = (a <= b)
    
    document.write("EQUAL: " + equal + "<br>")
    document.write("NOT EQUAL: " + notEqual + "<br>")
    document.write("GREATER THAN: " + greaterThan + "<br>")
    document.write("LESS THAN: " + lessThan + "<br>")
    document.write("GREATER THAN OR EQUAL: " + greaterThanOrEqual + "<br>")
    document.write("LESS THAN OR EQUAL: " + lessThanOrEqual + "<br>")
  }
  
  function logical( ) {
    let a = true;
    var b = false;
    
    var logicalAnd = (a && b)
    var logicalOr = (a || b)
    var logicalNot = (!((a && b)||(a||b)))
    
    document.write("AND: " + logicalAnd + "<br>")
    document.write("OR: " + logicalOr + "<br>")
    document.write("NOT: " + logicalNot + "<br>")
    
  }
  
  function assignment( ) {
    var a = 33;
    var b = 10;
    
    //((a += b)+(a -= b))
    var simpAssignment = ((a += b)+(a -= b))
    /*
    var addAssign = (a += b)
    var subtractAssign = (a -= b)
    var divideAssign = (a /= b)
    var multiplyAssign = ( a *= b)
    var modulesAssign = ( a %= b)
    */
    
    
    document.write("SIMPLE ASSIGN: " + simpAssignment + "<br>")
    document.write("ADD: " + addAssign + "<br>")
    document.write("SUBTRACT: " + subtractAssign + "<br>")
    document.write("DIVIDE: " + divideAssign + "<br>")
    document.write("MULTIPLY: " + multiplyAssign + "<br>")
    document.write("MODULO: " + modulesAssign + "<br>")
  }
  
  function miscellaneous( ) {
    var a = 10;
    var b = 20;
    
    var conditional = (a > b) ? 'true' : checkscope();
    
    if(a > b){
      100
    }else{
      200
    }
    
    document.write("CONDITIONAL: " + conditional + "<br>")
  }
  
  //checkscope()
  //arithmetic()
  //comparison()
  //logical()
  //assignment()
  //miscellaneous()