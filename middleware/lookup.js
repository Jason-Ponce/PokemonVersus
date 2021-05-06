const express = require('express');
const router = express.Router();
const path = require('path');
const P = require('./api.js');

function validateForm(input) {
  if (isNaN(input)) {
    let lowerInput = input.toLowerCase();
    return (lowerInput);
  } else {
    input = parseInt(input);
    return (input);
  }
}

module.exports = {validateForm}