import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function NavBar() {
    return (
        
        <div className="NavBar" >
                <h1> To Do List</h1>
                <ul>
                    <li><Link to="/" style={{color: "#183a1d"}}>ALL </Link></li>
                    <li><Link to="/Completed-Tasks" style={{color: "#183a1d"}} >Completed </Link></li>
                    <li><Link to="/Not-Completed-Tasks" style={{color: "#183a1d"}} >Incomplete </Link></li>
                </ul>
        </div>
    )
}

export default NavBar
