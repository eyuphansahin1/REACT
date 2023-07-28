import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'

function Form({setInfo,setstate}) {
    const [city, setCity] = useState('')
    const handleChange=(event)=>{
        setCity(event.target.value);
    }
    const handleSumbit= async (event)=>{
        event.preventDefault();
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=847ccbefb97ef23430114b82ccc7c93d&units=metric&lang=tr`);
        console.log(response.data);
        setInfo(response.data);
        setstate(true);
    }
    return (
        <div className='formmain'>
            <h1>Hava Durumu</h1>
            <form onSubmit={handleSumbit} >
                <div className="form">
                    <input onChange={handleChange} value={city} type="text" placeholder="Please enter a city" />
                    <button type="sumbit" className="btn"> <FaSearch /></button>
                </div>
            </form>

        </div>


     );
}

export default Form;