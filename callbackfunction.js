function x(){

}
x(function y(){ 

} )


setTimeout(() => {
    console.log("timer")
}, 3000);

function v(m){
    console.log("v")
}

v(function m(){
    console.log("m")
})



function sum(a,b){
    return a+b
}

var show = function(sum){
    console.log(" sum is ",sum)
}
show(sum(1,2))


// Example 


function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}
greet('Developer', callMe);


function createQuote(sentence, callback){ 
    var newSentence = "First Sentence " + sentence;
    callback(newSentence); // 2
  }
  function SentenceFunc(para){
    console.log(para);
  }
  createQuote("Second Sentence", SentenceFunc("callback function")); // 1
