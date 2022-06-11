// Write your solution in this file!
employee = {
    name: "Sam",
    streetAddress: "2901 S Sepulveda"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee;
}



