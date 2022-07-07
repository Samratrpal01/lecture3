import Counter from "./CounterComponents"
function ProdcutCatalog(props)
{
    return(
           <div>
           { props.Detail.map((item)=>(
            <div className="card" style={{width:"20%"}}>
            <img src={item.itemImage}
            className="card-img-top" alt="no-image">
                </img>
            <div className="card-body">
              <h5 className="card-title">{item.itemTitle}</h5>
              <p className="card-text">{item.itemprice}</p>
              <a href={item.itemLink} className="btn btn-primary">Buy Here</a>
              <Counter></Counter>
            </div>
          </div>
            
            ))
           }   
           </div>
    )
}
export default ProdcutCatalog