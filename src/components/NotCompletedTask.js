import React from 'react'

import { connect } from 'react-redux'


     const mapStateToProps=state=>
    { return {
        TasksList:state.TasksList
        }
      }
          

function CompletedTask({TasksList}) {

var completed=[]
completed=TasksList.filter(el=>el.isDone===false)
console.log(TasksList)
console.log(completed)
    return (
        <div>
         
         <h2>completed Tasks </h2>
        {completed.map(el=> <h4>- {el.TaskName}</h4>)}
        </div>
    )
}

export default connect (mapStateToProps)(CompletedTask)
