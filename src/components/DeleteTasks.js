import React from 'react'
import { FaTrash} from 'react-icons/fa'
import { connect } from 'react-redux'
import {DeleteTask} from '../JS/Actions/Actions'
   const mapDispatchToProps= dispatch=> {
    return{
        DeleteTask: key=>dispatch(DeleteTask(key))

    }
 }
 function DeleteTasks({task,idx,DeleteTask}) {
 

    return (
        <div>
            <button onClick={()=>DeleteTask(idx)} ><FaTrash style={{backgroundColor:"#aabda4"}}/></button>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(DeleteTasks)
