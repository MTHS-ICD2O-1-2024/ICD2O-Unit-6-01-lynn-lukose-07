// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn Lukose
// Created on: apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-lynn-lukose-07/sw.js", {
    scope: "/ICD2O-Unit-6-01-lynn-lukose-07/",
  })
}
//This function multiplies 2 numbers

function calculate() {

  // input
  let counter = 0
  let answer = 0
  const firstNumber = parseFloat(document.getElementById('numberone').value)
  const secondNumber = parseFloat(document.getElementById('numbertwo').value)

  // process
  while (counter < secondNumber) {
    counter = counter + 1
    answer = answer + firstNumber
  }
  // output
  document.getElementById('answer').innerHTML = 'Your product is: ' + answer + '.'
}