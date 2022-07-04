import React from "react"
import { isTemplateExpression } from "typescript"
import CompletedItems from "./Completeitem"
export default class TodoComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            todoData:[{
                
            }],
            todoTitle:"",
            todoText:"",
            todoid:0
        }
    }
    addItem=()=>{
        this.setState({todoid:this.state.todoid+1})
        console.log("function1")
        this.setState({todoData:[...this.state.todoData,{
            id:this.state.todoid,
            title:this.state.todoTitle,
            text:this.state.todoText,
            completed:false
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
    changeCompletion=(itemid)=>{
            console.log("compilatio no")
            const temp=[...this.state.todoData]
            const obj=temp.find((item)=>item.id===itemid)
            obj.completed=!obj.completed
            this.setState({todoData:temp})

    }
    deleteTask=(itemid)=>{
        const temp=[...this.state.todoData]
        const result=temp.filter((item)=>item.id!==itemid)
        this.setState({todoData:result})
    }
    
    render(){
        const styleobj={
            backgroundColor:"grey"
        }
    console.log(this.state.todoData)
    
       return(
        <div>
            Title<input type="text" onChange={(e)=>this.handleTitle(e)}></input>
            Enter description<input type="text" onChange={(e)=>this.handleDescription(e)}></input>
            
            <button onClick={this.addItem}>Add_Item</button>
           <div style={styleobj}>
            <h1 >Pending Tasks</h1>
            {
                this.state.todoData.map((item)=>(
                    item.completed?<></>:
                    <div>
                        
                        <h2>{item.title}</h2>
                        <h3>{item.text}</h3>
                        <button onClick={()=>this.changeCompletion(item.id)}>Done</button>
                        <button onClick={()=>this.deleteTask(item.id)}>delete</button>
                        </div>
                ))
            }
            </div>
            <CompletedItems tododata={this.state.todoData}
            deleteFun={this.deleteTask}></CompletedItems>


        </div>
    )
    }
}