import { TextField } from "@mui/material"
import { useState } from "react"

function App(props)
{//props.prop1="peter"
  // let demo="Tony Stark"
  // const [Demo,setDemo]=useState("admin")

  // const updateDemo=(e)=>{
  //   e.preventDefault()
  //   demo="trainee"
  //   setDemo(demo);
  // }

  // return(
  //   <>
  //   <h1>Hello {props.prop1}</h1>
  //   <h2>test</h2>
  //   <h3>{Demo}</h3>
  //   <button onClick={updateDemo}>update</button>
  //   <h4>{Demo}</h4>
  //   console.log(Demo);
    

  //   </>
  //)
  return(
    <div>
      <TextField id="filled-basic" label="Filled"
      variant="filled" />
{    props.studentdata.map((item)=>(
      <div>
        <h2>{item.fname}</h2>
        <h3>{item.email}</h3>
      </div>

    ))
}
    </div>
  

  )
}
export default App