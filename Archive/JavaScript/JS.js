// 
/* */


window.onload = function(){
    document.querySelector("#DogAge").addEventListener("mouseover", HandleEventHover);
}

function HandleEventHover(){
    console.log("Handled Event");
}

function clickButton(){
    console.log('Button Clicked');
    let a = document.getElementById("DogBreed");
    a = document.querySelector("#DogBreed");
    a.innerHTML = "Basset Hound";
    a.outerHTML = "<img src='https://psmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTMyNzc2NzM1MDY1MjgzMDM4/shutterstock_151341212jpg.webp'>"
    document.querySelector("#DogAge").removeEventListener("mouseover", HandleEventHover);
}

function Get3PT(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
        }
    }
    xhr.open("GET", "https://www.balldontlie.io/api/v1/season_averages?" + 
    "season=2018&player_ids[]=140", true);
    xhr.send();
    console.log("After Send");
}






















// var variableName;
let variableNameTwoelectricboogaloo;
//const CONSTANT_NAME;


/* Primitive data types
//   string
//   number
//   bigint
//   boolean
//   undefined
//   symbol
//   null
*/


/* Collections
//   array
//   object
*/

let myArray = [1, 2, 'string'];

let myObject = {key1: 1};
console.log(myObject.key1);
console.log(myObject["key1"]);

function MyFunctionName() {
    variableNameTwoelectricBoogaloo = "Variable Two";
}

/*Truthy/Falsy
    All values are truthy except those that aren't, obviously.
    It is far easier to remember falsy as there are just seven.
        false
        0, -0, 0n
        '' "" `` (empty string)
        null
        undefined
        NaN
        document.all
*/

function FunWithFlows(){
    if(true){
        console.log('If statement was true.');
    }

    if(false){

    }else{
        console.log('if returned false');
    }

    if(false){

    }else if(true){

    }else{

    }

    switch(myArray[0]){
        case 1:
            console.log('It was one');
            break;
        case 2:
            console.log('It was 2');
        default:
            console.log('Default');
    }

    for(let i = 0; i < 50; i++){

    }

    while(myArray[1] == 2){
        console.log('Beware infinite loops');
    }

    do{

    }while(i == 0);

    for(let a of myArray){

    }

    for(let a in myObject){

    }
}

/* Control Flow 
//
// if(){
//   
// }
//
// switch(){
//  case v:
//  break;   
// }
//
// while
//
// do while
//
// for(i = 0; i<x;i++)
//
// for(let v of array)
//
// for(let v in object)
//
*/











