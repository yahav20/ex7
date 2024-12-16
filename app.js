async function foo() {
  console.log(1); //prints 1
  return new Promise((resolve, reject) => {
    console.log(2); //prints 2
    setTimeout(() => {
      //set timer
      console.log(3); //prints 3
      const r = Math.random();
      console.log(`r = ${r}`); //prints value of r
      if (r < 0.5) {
        console.log("4"); //prints 4
        resolve({ name: "Alice", age: 42 }); //send resolve back to bar
        console.log("5"); // prints 5
      } else {
        console.log("6"); //prints 6
        reject("No luck"); //send reject back to bar
        console.log("7"); //prints 7
      }
    }, 2000);
  });
}
async function bar() {
  console.log("8"); //first prints 8
  try {
    const f = await foo(); //call f and wait to her response
    console.log("9 " + f + " " + f.name); //prints 9 and prints data from resolved and data name
  } catch (error) {
    console.error("Error: ", error); //prints error and the reject
  }
  const f2 = foo(); //calls foo again but this time without waiting for timer 
  console.log("10 " + f2); //
  for (let i = 0; i < 3; i++) console.log(Math.random());
  // do more stuff if I want
  try {
    const v = await f2; //waiting the value from f2 (foo function)
    console.log("11 " + v.name); //prints 11 and the name from data  
  } catch (error) {
    console.error("Error2: ", error); //print rject error
  }
}
bar(); //first call bar

//i think the output will be 8 1 2 3 r {r - 2 cases} 1 2 10 {no value in f2} {3 random} 3 r {r - 2 cases}
// in case r<0.5 : 4 5 9/11 {data object} "Alice"
// in case r>=0.5 : 6 7 error/error2 No luck
