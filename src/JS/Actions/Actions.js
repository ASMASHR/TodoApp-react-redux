
import {ADD_TASK, EDIT_TASK,DELETE_TASK, TOGGLE_COMPLET} from '../Constants/actions-Types'


export const AddNewTask=newTask=>  {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const DeleteTask =key=>{
    return {
        type: DELETE_TASK,
        payload: key
    }
}
export const updateTodo =(textedit)=>{
    return {
        type: EDIT_TASK,
        payload:textedit
    }
}
export const toggleComplet =(complete)=>{
    return {
        type: TOGGLE_COMPLET,
        payload:complete
    }
}