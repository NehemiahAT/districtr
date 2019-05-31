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
    31 /* 32 (31 when counting from 0, as JavaScript does) is the number of ballot-qualified political parties in the U.S. */
);

var trainingData = [];

var i;

var input;

var output;

/* Add training data here. */
input = [0,0,0,0,0,0,0,1];
output = [0,0,0,0,0,0,0,1];
 
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

console.log("Democrat neuron: " + (recommendations[0] * 100) + "%");
console.log("Republican neuron: " + (recommendations[1] * 100) + "%");
console.log("Libertarian neuron: " + (recommendations[2] * 100) + "%");
console.log("Green neuron: " + (recommendations[3] * 100) + "%");
console.log("Constitution neuron: " + (recommendations[4] * 100) + "%");
console.log("Independent/Independence Parties neuron: " + (recommendations[5] * 100 + "%");
console.log("Working Families neuron: " + (recommendations[6] * 100 + "%");
console.log("Reform neuron: " + (recommendations[7] * 100 + "%");
console.log("American Delta neuron: " + (recommendations[8] * 100 + "%");
console.log("Labor neuron: " + (recommendations[9] * 100 + "%");
console.log("Natural Law neuron: " + (recommendations[10] * 100 + "%");
console.log("Progressive neuron: " + (recommendations[11] * 100 + "%");
console.log("American Freedom neuron: " + (recommendations[12] * 100 + "%");
console.log("American Party neuron: " + (recommendations[13] * 100 + "%");
console.log("Better for America neuron: " + (recommendations[14] * 100 + "%");
console.log("Conservative neuron: " + (recommendations[15] * 100 + "%");
console.log("Ecology neuron: " + (recommendations[16] * 100 + "%");
console.log("Grassroots-Legalize Cannabis neuron: " + (recommendations[17] * 100 + "%");
console.log("Justice neuron: " + (recommendations[18] * 100 + "%");
console.log("Legal Marijuana Now neuron: " + (recommendations[19] * 100 + "%");
console.log("Liberty Union neuron: " + (recommendations[20] * 100 + "%");
console.log("Moderate neuron: " + (recommendations[21] * 100 + "%");
console.log("Mountian neuron: " + (recommendations[22] * 100 + "%");
console.log("Peace and Freedom neuron: " + (recommendations[23] * 100 + "%");
console.log("Prohibition neuron: " + (recommendations[24] * 100 + "%");
console.log("Socialism and Liberation neuron: " + (recommendations[25] * 100 + "%");
console.log("United Citizens neuron: " + (recommendations[26] * 100 + "%");
console.log("United Utah neuron: " + (recommendations[27] * 100 + "%");
console.log("Unity neuron: " + (recommendations[28] * 100 + "%");
console.log("Veterans neuron: " + (recommendations[29] * 100 + "%");
console.log("Women’s Equality neuron: " + (recommendations[30] * 100 + "%");
console.log("Working Class neuron: " + (recommendations[31] * 100 + "%");
