"use strict";

var map;

var score;

var scoreChange;

var numberOfDistricts;

function mutateMap() {
 var mutationPartOne = Math.floor(Math.random() * numberOfDistricts) + 1; 
 var mutationPartTwo = Math.floor(Math.random() * map.length) + 1; 
 var strMutationHelper = map[mutationPartTwo].substr();
 map[mutationPartTwo] = 
}

