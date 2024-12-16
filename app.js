
function foo() {
  console.log("1"); //first prints 1
  return new Promise((resolve, reject) => {
    console.log("2"); //print 2
    setTimeout(() => { //now waiting , we will finish foo first
      console.log("3"); //prints 3
      const r = Math.random();
      console.log(`r = ${r}`); //print r value
      if (r < 0.5) { // in case r less than 0.5
        console.log("4"); //print 4
        resolve({ name: "Alice", age: 42 }); //will send after foo will be finished
        console.log("5"); //prints 5
      } else {
        console.log("6"); // prints 6
        reject("No luck"); //will send after foo will be finished
        console.log("7"); //prints 7
      }
    }, 2000);
    console.log("8"); //print 8 after 2 because of timer
  });
}

console.log("9"); //first line prints 9
foo() //call foo 
  .then((data) => { //wait until foo will be finished
    console.log("data:", data); //prints data if foo send resolved
  })
  .catch((error) => {
    console.error("error:", error); // prints error if foo send rejects
  });

  //i think the output will be 9 1 2 8 3 r {depends on r}
  // in case r<0.5 : 4 5 data: name: "Alice", age: 42
  // in case r>=0.5 : 6 7 error No luck