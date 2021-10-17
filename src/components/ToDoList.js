import React from 'react'
import Task from './Task'
import AddTask from './AddTask';
import { connect } from 'react-redux'
import './Style.css'

const mapStateToProps=state=>
    { return {
        TasksList:state.TasksList
        }
        
    }
const ToDoList=(props) =>{
    return (
        <div className="todoList">
            <AddTask/>
            <div className="Todo-Container">
                <h2>Let's do some work</h2>
                {/* <div style={{display:"flex", flexDirection:"column", alignItems:"center" , alignContent:"space-between"}}>
                    */}
                    {props.TasksList.map((task,i)=><Task  task={task} idx={i}></Task>)}
        
                {/* </div> */}
            </div>
        </div>
    )}

export default connect(mapStateToProps)(ToDoList)
