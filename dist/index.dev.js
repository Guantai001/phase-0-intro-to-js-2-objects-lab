"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Write your solution in this file!
var employee = {};

function updateEmployeeWithKeyAndValue(employees, key, value) {
  return Object.assign({}, employees, _defineProperty({}, key, value));
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  var NewObj = Object.assign({}, employee);
  delete NewObj[key];
  return NewObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  Object.assign({}, employee);
  delete employee[key];
  return employee;
}