function alertFunction(){
    alert("Yes, it worked")
}

exec = require('child_process').execFile;
path = require('path')
process = require('child_process');



// const util = require('util');
// const execWithPromise = util.promisify(require('child_process').execFile);
// const exec2 = require('child_process').exec



/**
 * The Following functions execute the compiled exe python files and gets the result. 
 * 
 */
function addNumbers(){ 
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var fileName = path.join(__dirname,'python/dist/calculations/calculations')
    var params = ['add',firstNumber,secondNumber]
    exec(fileName, params,(error,result,stderr)=>{
        if (error) {
            console.log(error)
        }
        document.getElementById('resultArea').innerHTML = result
    }) 
}

function substractNumbers(){ 
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var fileName = path.join(__dirname,'python/dist/calculations/calculations')
    var params = ['substract',firstNumber,secondNumber]
    exec(fileName, params,(error,result,stderr)=>{
        if (error) {
            console.log(error)
        }
        document.getElementById('resultArea').innerHTML = result
    }) 
}


function multiplyNumbers(){ 
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var fileName = path.join(__dirname,'python/dist/calculations/calculations')
    var params = ['multiply',firstNumber,secondNumber]
    exec(fileName, params,(error,result,stderr)=>{
        if (error) {
            console.log(error)
        }
        document.getElementById('resultArea').innerHTML = result
    }) 
}

function divideNumbers(){ 
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var fileName = path.join(__dirname,'python/dist/calculations/calculations')
    var params = ['divide',firstNumber,secondNumber]
    exec(fileName, params,(error,result,stderr)=>{
        if (error) {
            console.log(error)
        }
        document.getElementById('resultArea').innerHTML = result
    }) 
}


function addResponse(){  
    var fileName = path.join(__dirname,'python/dist/calculations/calculations.exe')
    // var params = ['timerRes']
    // exec(fileName,params,(error,result,stderr)=>{
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log("Result of timeres =>" , result)
    //     document.getElementById('resultArea').innerHTML = result
    // })
    var cmd = process.exec('"'+fileName + '" timerRes');
    cmd.stdout.on('data',function(result){
        document.getElementById('resultArea').innerHTML = "<br><strong>Progress</strong> " + result
    });
    cmd.stderr.on('data', function(err){
        console.log(err);
    });
    cmd.on('close', function(){
        console.log('Finished');
        document.getElementById('resultArea').innerHTML = "<br><strong>Progress</strong>&nbsp;&nbsp;<strong style='color:green;'>Finished</strong>"
    });
}



/**
 * The below functions execute the .py files directly using the py-shell npm package.
 */
 

// function addNumbers(){
//     var firstNumber = document.getElementById('firstNumber').value
//     var secondNumber = document.getElementById('secondNumber').value
    
//     //Now we start with Python
//     const {PythonShell} = require("python-shell");
//     var path = require('path')

//     //options and arguments to pass to our python  script.
//     var options = {
//         scriptPath: path.join(__dirname,'python/dist/calculations/'),
//         pythonPath: 'C:\\python27\\python',
//         args : ['add',firstNumber,secondNumber]
//     }

//     //initializing the constructor
//     var pShell = new PythonShell('calculations.exe', options)
    
//     //response from our python script
//     pShell.on('message', function(message){
//         document.getElementById('resultArea').innerHTML = message
//     })

// }  

// function substractNumbers(){
//     var firstNumber = document.getElementById('firstNumber').value
//     var secondNumber = document.getElementById('secondNumber').value
    
//     //Now we start with Python
//     const {PythonShell} = require("python-shell");
//     var path = require('path')

//     //options and arguments to pass to our python  script.
//     var options = {
//         scriptPath: path.join(__dirname,'python/'),
//         pythonPath: 'C:\\python27\\python',
//         args : ['substract',firstNumber,secondNumber]
//     }

//     //initializing the constructor
//     var pShell = new PythonShell('calculations.pyc', options)
    
//     //response from our python script
//     pShell.on('message', function(message){
//         document.getElementById('resultArea').innerHTML = message
//     })

// }  

// function multiplyNumbers(){
//     var firstNumber = document.getElementById('firstNumber').value
//     var secondNumber = document.getElementById('secondNumber').value
    
//     //Now we start with Python
//     const {PythonShell} = require("python-shell");
//     var path = require('path')

//     //options and arguments to pass to our python  script.
//     var options = {
//         scriptPath: path.join(__dirname,'python/'),
//         pythonPath: 'C:\\python27\\python',
//         args : ['multiply',firstNumber,secondNumber]
//     }

//     //initializing the constructor
//     var pShell = new PythonShell('calculations.pyc', options)
    
//     //response from our python script
//     pShell.on('message', function(message){
//         document.getElementById('resultArea').innerHTML = message
//     })

// }  

// function divideNumbers(){
//     var firstNumber = document.getElementById('firstNumber').value
//     var secondNumber = document.getElementById('secondNumber').value
    
//     //Now we start with Python
//     const {PythonShell} = require("python-shell");
//     var path = require('path')

//     //options and arguments to pass to our python  script.
//     var options = {
//         scriptPath: path.join(__dirname,'python/'),
//         pythonPath: 'C:\\python27\\python',
//         args : ['divide',firstNumber,secondNumber]
//     }

//     //initializing the constructor
//     var pShell = new PythonShell('calculations.pyc', options)
    
//     //response from our python script
//     pShell.on('message', function(message){
//         document.getElementById('resultArea').innerHTML = message
//     })

// }  



