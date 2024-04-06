"use client"

import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count , setCount] = useState(0);
    // console.log(count)   // giving me two  times the same value, why?
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-5xl"> 
    <h1>{count}</h1>  
    {
        console.log(count)
    }
    <button className="flex" onClick={()=>{setCount(count+1)}}>Increament</button>
    <button className="flex" onClick={()=>{
        if(count < 1) {
            return setCount(0);
        }
        return setCount(count-1);}}>Decreament</button>
  </main>
  )
}

export default Counter
