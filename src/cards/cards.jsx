import React from 'react'
import './cards.css'
import { FaUserCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

function cards({ ticket, users }) {
    const user = users.find((user) => user.id === ticket.userId);
    return (
        <div className='tickets'>
            <div className="ticketsH">
                <div className="ticketNo">
                    {ticket.id}
                </div>
                <div className="icon">
                    <FaUserCircle/>
                </div>
            </div>
            <p>User: {user ? user.name : 'Unknown User'}</p>
            <div className="task">
                <p>{ticket.title}</p>
            </div>
            <div className="buttons">
                <button className='b1'>!</button>
                <button className='b2'><FiCircle/> {ticket.tag}</button>
            </div>
        </div>
    )
}

export default cards