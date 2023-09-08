import React from 'react'
import Cards from './cards';
import './Column.css';

function column({ ticket, users }) {
    const user = users.find((user) => user.id === ticket.userId);
    return (
    <>
        <div className="container">
        {tickets.map((ticket) => (
            <Cards key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
    </>
    )
}

export default column