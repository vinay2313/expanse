
import { useState } from 'react';
import './App.css';
import Income from './componants/Income';
import List from './componants/List';
import Main from './componants/Main';
import { v4 as uuidv4 } from "uuid";
function App() {
   const[trans,Settrans] = useState([])
 function gettrans(t ,a){
        
 let newtrans =  {
          text:t,
          amount:a,
          id: uuidv4(),
         }
         Settrans([...trans,newtrans])
       console.log(trans)

 }
function deletedata(id){
  // console.log(id)
  Settrans(trans.filter((t)=>{
    if(t.id!=id) {
    return t
    }
  }))
}

  return (
    <div className="App">
      
      <Main gettrans={gettrans} trans={trans}/>
      <Income trans={trans}/>
      {
        trans.map((t)=><List t={t} deletedata={deletedata}/>
        )
      }
     
    </div>
  );
}

export default App;
