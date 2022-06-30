import React from "react"
export default class TodoComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            todoData:[{
                title:"buy eggs",
                text:"buy 12 eggs"
            }],
            todoTitle:"",
            todoText:""
        }
    }
    addItem=()=>{
        console.log("function1")
        this.setState({todoData:[...this.state.todoData,{
            title:this.state.todoTitle,
            text:this.state.todoText
        }]})
       
    }
    handleTitle=(ev)=>{
        console.log(ev)
        this.setState({todoTitle:ev.target.value})

    }
    handleDescription=(ev)=>
    {
        this.setState({todoText:ev.target.value})
    }
    render()
    {   return(
        
        <div>
            Title<input type="text" onChange={(e)=>this.handleTitle(e)}></input>
            Enter description<input type="text" onChange={(e)=>this.handleDescription(e)}></input>
            <button onClick={this.addItem}>Add_Item</button>
            {
                this.state.todoData.map((item)=>(
                    <div>
                        <h2>{item.title}</h2>
                        <h3>{item.text}</h3>
                        </div>
                ))
            }
        </div>
    )
    }
}