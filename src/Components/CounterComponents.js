import {useState} from 'react';

export default function Counter()
{   
    const [count,setCount]=useState(0)
    const increment=()=>
    {
        setCount(count+1)
    }
    const decrement=()=>
    {
        setCount(count-1)
    }
    return(
        <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <h1>Hello World</h1>
        <button onClick={decrement}>-</button>
        </div>
    )
}