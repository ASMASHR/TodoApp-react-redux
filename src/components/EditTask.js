import React, {useState} from 'react'
import { FaEdit} from 'react-icons/fa'
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import {updateTodo} from "../JS/Actions/Actions"

const mapDispatchToProps= dispatch=> {
    return{
        updateTodo: (textedit)=>dispatch(updateTodo(textedit))
    }
 }


function EditTask ({task,updateTodo}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [text,settext]=useState('');
    const handleShow = () => {
    setShow(true)
};
    const handleSubmit =()=>{
        const textedit = {...task, TaskName : text}
        updateTodo(textedit)
        setShow(false)
    }
    return (
        <div>
            <button  onClick={handleShow}>
                <FaEdit style={{backgroundColor:"#aabda4", fontSize:"35px"}}/>
            </button>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton style={{backgroundColor:"#f2f2f2"}} >
                    <Modal.Title className="modal-Title">Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100px", width:"100%"}}>
                        <label>Task Name</label>
                        <input type="text"   onChange={e=>settext(e.target.value)}></input>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:"#f2f2f2"}}>
                    <button onClick={handleSubmit} >Save Changes</button> 
                </Modal.Footer>
            </Modal>
        </div>
    )
}

                
export default connect(null,mapDispatchToProps)(EditTask)
