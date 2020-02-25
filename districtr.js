/* Code based on a tutorial from Progur (https://progur.com/2016/09/how-to-create-deep-neural-networks-in-javascript.html). */

/* This neural network predicts the counts of votes for each person, one at a time. A supercomputer would be needed in real life */

/* Use the Synaptic library v1.1.4. */

function convertToBinaryArray(coordinates) {

"use strict";
    var coordInBinary = coordiates.toString(2); 
    
    if(coordInBinary.length > 7) {
        return [1,1,1,1,1,1,1,1];

     }
 
    while(coordInBinary.length < 7) { 
        coordInBinary = "0" + coordInBinary;
    }
 
    // Convert string to array
    return coordInBinary.split("").map(function(i) {
        return parseInt(i); }
    );
}

var predictr = new synaptic.Architect.Perceptron(

/* Remember to change numbers of neurons. */
    7, 
    3,
    3, 
    0
);

var trainingData = [];

var i;

var input;

var output;

/* Add training data here. */
input = [0,0,0,0,0,0,0,1];
output = [1];
 
    trainingData.push({
        input: input,
        output: output
    });
}

var myTrainer = new synaptic.Trainer(predictr);
myTrainer.train(trainingData, {
    rate: 0.1,
    iterations: 10000,
    shuffle: true
});

var coord = convertToBinaryArray(11);
var recommendations = predictr.activate(coord);

console.log("Properly Representing Areas of Interest neuron: " + (recommendations[0] * 100) + "%");
