import React, { useState }from "react";

function Counter() {
  const [ count, setCount ] = useState(0);

  function increment (){
    console.log(count);
    //if you need to make any updates to state that are based on the current value of state, you should use the callback syntax.
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);

     //console.log(`after setState ${count}`);
  }
  
   return <div onClick={increment}>{ count}</div>

                  // setting a simple counter using =>setCount(count +1 )
                   //}
                 ///return <button onClick={increment}>I have been clicked {count} times</button>;
  
 

}


export default Counter;