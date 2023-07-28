import { useState } from 'react'
import './App.css'
import Form from '../components/form';
import Info  from '../components/info';
function App() {
  const[info,setInfo]=useState([]);
  const [state, setstate] = useState(false)
  return (
   <div className='App'>
      <Form  setInfo={setInfo} setstate={setstate}/>
      <Info info={info} state={state}/>
   </div>
  );
}


export default App
