import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Cards from './Cards/cards';
import './tickets.css';

function tickets() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [groupingOption, setGroupingOption] = useState('status');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.quicksell.co/v1/internal/frontend-assignment'
                );
                setTickets(response.data.tickets);
                setUsers(response.data.users);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const groupTickets = () => {
        const groupedTickets = {};

        tickets.forEach((ticket) => {
            const groupKey = ticket[groupingOption];
            if (!groupedTickets[groupKey]) {
                groupedTickets[groupKey] = [];
            }
            groupedTickets[groupKey].push(ticket);
        });

        return groupedTickets;
    };

    const groupedTickets = groupTickets();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
            <h1>Kanban Board</h1>
            <label className='label'>
                Display:<HiAdjustmentsHorizontal/>
                <select
                    value={groupingOption}
                    onChange={(e) => setGroupingOption(e.target.value)}
                >
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                    <option value="userId">UserId</option>
                    <option value="title">Title</option>
                </select>
            </label>
            <div className='grid'>
            {Object.keys(groupedTickets).map((groupKey) => (
                <div key={groupKey} className="group-container">
                    <h2 className="group-header">{groupKey}</h2>
                    {groupedTickets[groupKey].map((ticket) => (
                        <Cards key={ticket.id} ticket={ticket} users={users} />
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
}

export default tickets;
