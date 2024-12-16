function foo(callback) {
  console.log("1"); // print 1
  setTimeout(() => { // set timer and then go back ayscn until the timer will be stop 
    const data = { name: "alice", age: 42 };
    console.log("2"); //after 2 secends print 2
    callback(data); // call bar with data
    console.log("3"); //after bar will finish the output with 3
  }, 2000);
}
function bar(data) {
  console.log("4"); //after 2 the call to bar print 4
  console.log("data:", data); //print the data after 4
}
console.log("5"); // first will this will be printed
foo(bar); // then call this  goes to foo
console.log("6");// until the timer stoped pront 6


// i think the output will be 5 1 6 2 4 data: name: "alice", age: 42 3