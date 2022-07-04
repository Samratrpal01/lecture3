const CompletedItems=(props)=>{
    console.log("this is props",props.tododata)
    const styleobj={
        backgroundColor:"aqua"
    }
    
    return(
        <div style={styleobj}>
            <h1>Completed Taks Are:-</h1>
            {
                props.tododata.map((item)=>{
                    return item.completed&&<div>
                        <h3>{item.title}</h3>
                        <h4>{item.text}</h4>
                        <button onClick={()=>props.deleteFun(item.id)}>Delete</button>
                        </div>
                }
                )
            }
        </div>
    )
}
export default CompletedItems