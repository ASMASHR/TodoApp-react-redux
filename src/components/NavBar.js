import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function NavBar() {
    return (
        // d-flex justify-content-between  bg-light " id="mainNavBar"
        // className="btn-group"
        //  
        <div className="NavBar" >
            {/* <div className="NavBar-link"> */}
                 <h1> To Do List</h1>
                <ul>
                    <li><Link to="/" style={{color: "#183a1d"}}>ALL </Link></li>
                    <li><Link to="/Completed-Tasks" style={{color: "#183a1d"}} >Completed </Link></li>
                    <li><Link to="/Not-Completed-Tasks" style={{color: "#183a1d"}} >Incomplete </Link></li>
                </ul>
            {/* </div> */}
        </div>
    )
}

export default NavBar
