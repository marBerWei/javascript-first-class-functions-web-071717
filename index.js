function receivesAFunction(callback){
	callback()
}

function returnsANamedFunction() {
	return function hello(){
		console.log("hello!")
	}
}

function returnsAnAnonymousFunction(){
	return function() {
    console.log(`Nom nom nom, this is delicious!`);
  }
}