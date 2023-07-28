import Neighbor from "./Neighbor";


function Neighbors({border_is_true ,api_is_true,borders}) {
    return (
        <div className="w-100 mt-3 ortala2">
        {
            border_is_true && api_is_true ?
            <div className="container ">
             <div className="card w-100">
                 <div className="card-header">
                 Neighboring countries
                 </div>
                 <div className="card-body">
                     <div className="row ortala2 ">
                       {borders.map((count,index)=>{
                        return <Neighbor count={count} key={index}/>
                       })}
                     </div>
                 </div>
             </div>

         </div>: api_is_true? <div className="container ">
             <div className="card w-100">
                 <div className="card-header">
                 Neighboring countries
                 </div>
                 <div className="card-body">
                     <div className="row">
                     <div className="alert alert-warning" role="alert">
                        komşu ülke yok
                        </div>
                     </div>
                 </div>
             </div>

         </div>:null
        }

     </div>
    );
}

export default Neighbors;