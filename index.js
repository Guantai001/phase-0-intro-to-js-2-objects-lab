// Write your solution in this file!


function updateEmployeeWithKeyAndValue( employee, key , value){
    return Object.assign({}, employee, {[key]: value});
    
}