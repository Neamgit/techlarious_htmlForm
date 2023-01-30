
//this function can replace any text by writing .split("old word") and in .join("new word") 
let newtext = function(text){
    return text
    .split("skills")
    .join("dev tips");
};
console.log(newtext("TECHlarious team show us new skills"));

//------------------------------------------------------------------------------------------------------
// this function works as concact function
function concact(){
    let part1="Hello";
    let part2="world";
    const completetxt=part1+" "+part2;
    return completetxt;
}
console.log(concact());