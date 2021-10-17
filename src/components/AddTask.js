import React, {useState} from 'react'
import { connect } from 'react-redux'
import {AddNewTask} from '../JS/Actions/Actions'

const mapDispatchToProps= dispatch=> {
    return{
        AddinngTask: task=>dispatch(AddNewTask(task))
    }
}
const AddTask=(props)=> {
    const [TaskName,setTaskName]=useState('');
    const isDone=false
    const id=Math.random()
    const handleSubmit =(e)=>{
        e.preventDefault();
   
        if (TaskName==='')
            alert('the task name should\'nt be empty')
        else{
            props.AddinngTask({id,TaskName,isDone})
            setTaskName('');
        }
    }
    
    return (   
                <div className="addtask-div" >
                    <input type="text" placeholder="Task Name"  value={TaskName} onChange={e=>setTaskName(e.target.value)}></input>
                    <button onClick={handleSubmit} >ADD TO TASKS</button> 
                </div>
        
    )
}

export default connect(null,mapDispatchToProps)(AddTask)
