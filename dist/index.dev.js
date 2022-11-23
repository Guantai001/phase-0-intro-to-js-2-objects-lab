"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, _defineProperty({}, key, value));
}