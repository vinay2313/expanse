import React from 'react'

function List({t,deletedata}) {
    
  return (
    <div>
        <ul className="list-group mt-3">
  <li className="list-group-item active list" aria-current="true">
  <h3>{t.amount}</h3> 
   <h3>{t.text}</h3><button onClick={()=>deletedata(t.id)} type="button" class="btn btn-danger">Delete</button>
  </li>
</ul>

    </div>
  )
}

export default List