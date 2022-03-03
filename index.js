// Write your solution in this file!
const employee = {
    information: {
        name: "Peppa",
        streetAddress: "123 Hart St.",
    }
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
}
const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Alejandro")

newEmployee;

function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign({}, obj, { [key]: value});
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
};
console.log(employee)