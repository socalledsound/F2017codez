function conditionalChaining(value){
    if (value) {
        //do something
        return doSomething();
    } else{
        //do something else
        return doSomeOtherThing();
    }
}

var promise = myPromiseFunction().then(conditionalChaining);

promise.then(function(value){
    //keep executing functions that should be called either way
});