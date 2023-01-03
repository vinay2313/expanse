import React from 'react'
import { useState } from 'react'

function Main({gettrans,trans}) {
    const[text,Settext]=useState('')
    const[amount,Setamount]=useState('')
    const balance = trans.reduce((a,c)=>{
        return a + parseInt(c.amount)
    },0)
    
  return (
    <div className='main'>

<form className="row g-3 " 
onSubmit={(e)=>{
    e.preventDefault()
    gettrans(text,amount)
    Settext('')
    Setamount('')
}}>
<div className="col-8">
 
  <input
    type="text"
    value={text}
    onChange={(e)=>Settext(e.target.value)}
    className="form-control"
   placeholder='inter text'
   required
  />
</div>

  <div className="col-8">
    
    <input
      type="number"
      required
      value={amount}
      onChange={(e)=>Setamount( e.target.value)}
      className="form-control"
    
      placeholder="amount"
    />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">
      Submit
    </button>
  </div>
</form>
 <div className="main2">
    <h1>Current Balence</h1>
    <h1>{balance}</h1>
 </div>

    </div>
  )
}

export default Main