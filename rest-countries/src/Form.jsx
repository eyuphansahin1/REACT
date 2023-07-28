import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useState } from "react";

function Form({ setapi_result, setApi_is_true, setBorders, setBordersIsTrue }) {
    const [value, setValue] = useState('');
    const [showAlert, setShowAlert] = useState(false); // State to manage the alert visibility

    const hanldeInputChange = (event) => {
        setValue(event.target.value);
        setShowAlert(false); // Hide the alert when user starts typing again
    }

    const hadleFormSumbit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${value}`);

            setapi_result(response.data);
            if (response.data[0].borders) {
                const countries = await response.data[0].borders;
                setBordersIsTrue(true);
                const response2 = await axios.get('https://restcountries.com/v3.1/alpha?codes=' + countries.toString());
                console.log(response2.data);
                setBorders(response2.data);
            } else {
                setBordersIsTrue(false);
            }
            console.log();
            setApi_is_true(true);
        } catch (error) {
            // If there is an error (country not found), display the alert
            setShowAlert(true);
        }
    }

    return (
        <div className="container">
            <form onSubmit={hadleFormSumbit} >
                <div className="mb-3 average">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        <h1 className="h4 display-4 fw-bold">Country App</h1>
                    </label>
                    <input value={value} onChange={hanldeInputChange} type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                {showAlert && <div className="alert alert-danger" role="alert">
                    Country not found!
                </div>}
            </form>
        </div>
    );
}

export default Form;
