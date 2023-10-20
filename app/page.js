"use client"
"use Strict"
import React, { useState } from 'react'
import '@/app/page.css'
const page = () => {
  const [result,setresult] = useState("")
  const clickHandler = (e)=>{
    setresult(result.concat(e.target.value))
  }
  const clearDisplay = ()=>{
    setresult("")
  }
  const calculate = ()=>{
    setresult(eval(result).toString());
  }
  return (
    <div className='main1'>
      <div className='calc'>
       <input className='main' style={{border:"2px solid black"}} type="text" placeholder='0' id='answer' value={result} />
       <input  type="button" value="9" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="8" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="7" className='button cursor-pointer' onClick={clickHandler}  />
       <input  type="button" value="6" className='button cursor-pointer' onClick={clickHandler}  />
       <input  type="button" value="5" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="4" className='button cursor-pointer' onClick={clickHandler}  />
       <input  type="button" value="3" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="2" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="1" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="0" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="." className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="+" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="-" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="*" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="/" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="%" className='button cursor-pointer' onClick={clickHandler} />
       <input  type="button" value="clear" className='button1 cursor-pointer' onClick={clearDisplay}/>
       <input  type="button" value="=" className='button1 cursor-pointer' onClick={calculate}/>
    </div>
    </div>
  )
}

export default page