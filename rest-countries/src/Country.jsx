
import "bootstrap/dist/css/bootstrap.min.css";
function Country({api_is_true,api_result}) {
    return ( 
        <div className="w-100">
           {
            api_is_true ?
            <div className="container ">
                <div className="card w-100">
                    <div className="card-header">
                    your search result
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-4 border border-1">
                                <img src={api_result[0].flags.png} alt="" className="img-fluid w-100 h-100" />
                            </div>
                            <div className="col-8 ortala">
                            <div className="flex gap-3">
                                <h4>Country Name:</h4><p className="lead">{api_result[0].name.official}</p>
                            </div>
                            <div className="flex gap-3">
                                <h4>Language:</h4><p className="lead">{Object.values(api_result[0].languages)}</p>
                            </div>
                            <div className="flex gap-3">
                                <h4>Population:</h4><p className="lead">{api_result[0].population}</p>
                            </div>  
                            <div className="flex gap-3">
                                <h4>currencies:</h4><p className="lead">{Object.values(api_result[0].currencies)[0].name} (${Object.values(api_result[0].currencies)[0].symbol})</p>
                            </div>  
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>:
            
            <div className="container ">
                <div className="card w-100">
                    <div className="card-header">
                    your search result
                    </div>
                    <div className="card-body">
                    <div className="alert alert-warning" role="alert">
                        There is no country
                        </div>
                    </div>
                </div>
            
            </div>
           }
        </div>
     );
}

export default Country;