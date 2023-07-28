
import {WiSunset} from 'react-icons/wi'

function Info({info,state}) {
    return ( 
        <div>
                    {state?<div className="info">
        <p id="city">{info.name}</p>
        <div className="general_value">
            <p id="tempature">{info.main.temp}</p><WiSunset/>
        </div>
    </div>:null}
        </div>

     );
}

export default Info;