import React from 'react'

function Income({trans}) {
    const income = trans.filter((t)=>{
        if(t.amount>0){
            return true
        }
    }).reduce((a,c)=>{
        
        return a + parseInt(c.amount)
    },0);
    const expense = trans.filter((t)=>{
        if(t.amount<0){
            return true
        }
    }).reduce((a,c)=>{
        
        return a + parseInt(c.amount)
    },0);
  
  return (
    <div className='main'>
        <div className='main2'>
        <h1>Current Income</h1>
        <h1>{income}</h1>
    </div>
    <div className='main2'>
        <h1>Current Expense</h1>
        <h1>{Math.abs(expense)}</h1>
    </div>
    
    </div>
  )
}

export default Income