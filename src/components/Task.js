import React from 'react'
import { connect } from 'react-redux'
import {toggleComplet} from '../JS/Actions/Actions'
import DeleteTasks from './DeleteTasks'
import EditTask from './EditTask'
const mapDispatchToProps= dispatch=> {
    return{
        toggleComplet: complete=>dispatch(toggleComplet(complete))
    }
 }
function Task({ task,idx,toggleComplet}) {
      
          const [checked, setChecked] = React.useState(false);
 
  const handleChange = () => {
    setChecked(!checked);
    var isDone=task.isDone
     const complete = {...task, isDone : !isDone}
    toggleComplet(complete)
  };

    return (
        <div className="task-container">
            <span> 
                <input type="checkbox" checked={checked} onChange={(e)=>handleChange(e)}/>{task.isDone?<span style={{color:"gray", textDecoration:"line-through"}}> {task.TaskName}</span>:<span>{task.TaskName}</span>}
            </span>
            <div className="button-div">
                <DeleteTasks task={task} idx={idx}/>
                <EditTask task={task} />
            </div>        
        </div>
    )
}

export default  connect(null,mapDispatchToProps)(Task)