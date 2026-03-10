import { useState } from "react"
function Content(){
    const [count,SetCount] = UseState(0)
    return(
         <div>
        <h3>Products Page</h3>
    {count}
    </div>
    );
}
export default Content