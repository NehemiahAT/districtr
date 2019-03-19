/* Code based on a tutorial from Progur (https://progur.com/2016/09/how-to-create-deep-neural-networks-in-javascript.html). */

import("https://cdnjs.cloudflare.com/ajax/libs/synaptic/1.1.4/synaptic.js"); /* Use the Synaptic library. */

function convertToBinaryArray(coordinates) {

"use strict";
    var coordInBinary = coordiates.toString(2); 
    
    if(coordInBinary.length > 7)
        return [1,1,1,1,1,1,1];
 
    while(coordInBinary.length < 7) { 
        coordpInBinary = "0" + coordInBinary;
    }
 
    // Convert string to array
    return coordInBinary.split("").map(function(i) {
        return parseInt(i); }
    );
}

var districtr = new synaptic.Architect.Perceptron(

/* Remember to change numbers of neurons. */
    7, 
    3,
    3, 
    4
);

var trainingData = [];
 
/* Remeber to edit this data according to changed numbers of neurons */

for(var i = 1;i < 75; i++) {
    var input = convertToBinaryArray(i); 
    var output = [0,0,0,0]; 
    if(i <= 5)
        output = [1,0,0,0]; 
    else if(i > 5 && i <= 15)
        output = [0,1,0,0];
    else if(i > 15 && i <= 40)
        output = [0,0,1,0]; 
    else
        output = [0,0,0,1];
 
    trainingData.push({
        input: input,
        output: output
    });
}
