import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './Form';
import Country from './Country';
import Neighbors from './Neighbors';
function App() {
  const [api_is_true, setApi_is_true] = useState(false);
  const [api_result, setapi_result] = useState([]);
  const [borders,setBorders]=useState([]);
  const [border_is_true,setBordersIsTrue]=useState(false)
  return (
    <div className='App'>
         <Form setapi_result={setapi_result} setApi_is_true={setApi_is_true} setBorders={setBorders} setBordersIsTrue={setBordersIsTrue}/>
         <Country api_is_true={api_is_true} api_result={api_result}/>
         <Neighbors borders={borders} api_is_true={api_is_true} border_is_true={border_is_true}/> 
    </div>  
   
  
  )
}

export default App
