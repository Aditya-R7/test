import React, { useEffect, useState } from 'react'
import './App.css'
import Tickets from './tickets';


function TicketList() {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace 'YOUR_JSON_URL' with the actual URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Ticket List</h1>
        <ul>
          {data.tickets.map((ticket) => (
            <Cards key={ticket.id} ticket={ticket} users={data.users} />
          ))}
        </ul>
      </div>
      <div>
        <Tickets/>
      </div>
    </>
  );
}

function App() {
  return (
    
    <>
      <Tickets/>
    </>
  );
}


export default App
