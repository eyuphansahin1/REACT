function Neighbor({count}) {
    console.log("************")
    console.log(count.name.common);
    console.log("************")
    return ( 
    
    <div className="col-3">
        <div className="card mt-2">
            <div className="card-body">
                <img src={count.flags.png} alt="" className="img-fluid" />
            </div>
            <div className="card-footer">
                <p>{count.name.common}</p>
            </div>
        </div>
       
    </div>
    
    );
}

export default Neighbor;