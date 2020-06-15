//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks 
//should return the SECOND callback param invoked.

function invokesCallbacks(num1, callback1, callback2){
  if(num1 > 10){
    return callback1(num1)
  }else{
    return callback2(num1)
  }
}




//////////////////PROBLEM 2////////////////////

//Within the function timedGreeting below, create a
//setTimeout (a native javascript method) 
//that assigns the result 
//of invoking the callback parameter 
//to the variable greeting, after 1 second.

  var greeting;

  function timedGreeting(callback){
    return setTimeout(callback, 1000, greeting)
}




//   setTimeout(function, milliseconds, param1, param2, ...)
//   Parameter	Description
// function	Required. The function that will be executed
// milliseconds	Optional. The number of milliseconds to wait before executing the code. If omitted, the value 0 is used
// param1, param2, ...	Optional. Additional parameters to pass to the function (Not supported in IE9 and earlier)

