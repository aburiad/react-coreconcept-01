import React, { useState } from 'react'

const Increment = ()=>{
        const [count,setCount] = useState(0);
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }}>Add points</button>
                        <button onClick={()=>{
                setCount(count-1)
            }}>Remove points</button>
        </div>
    )
}

export default Increment;