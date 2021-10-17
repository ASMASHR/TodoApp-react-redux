import {ADD_TASK, EDIT_TASK,DELETE_TASK,FILTER_TASKS,TOGGLE_COMPLET} from '../Constants/actions-Types'

const initialState={
TasksList:[
    {id:1,TaskName:"Complete the redux check point", isDone:false},
    {id:2,TaskName:"Complete the API check point", isDone:false},
    {id:3,TaskName:"Read NodeJS cours", isDone:false},

] 
}

const rootReducers=(state=initialState, action)=> {
    switch(action.type){
        case ADD_TASK:
            return { TasksList:[...state.TasksList,action.payload]}
        case DELETE_TASK:
            return {...state, TasksList:state.TasksList.filter((task,i)=>i!==action.payload)}
        case EDIT_TASK:
            return{...state, TasksList:state.TasksList.map((el)=>el.id===action.payload.id?action.payload:el)}
        case FILTER_TASKS:
            return {...state, TasksList:state.TasksList.filter(el=>el.isDone==true)}
        case TOGGLE_COMPLET:
            return{...state, TasksList:state.TasksList.map((el)=>el.id===action.payload.id?action.payload:el)}
        default:
            return state
    }
}
export default rootReducers
