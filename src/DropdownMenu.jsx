import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import './DropdownMenu.css';

function DropdownMenu() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedGrouping, setSelectedGrouping] = useState(null);
  const [selectedOrdering, setSelectedOrdering] = useState(null);

  const handlePageChange = (page) => {
    setSelectedPage(page);
    setSelectedGrouping(null);
    setSelectedOrdering(null);
  };

  const handleGroupingChange = (grouping) => {
    setSelectedGrouping(grouping);
    setSelectedOrdering(null);
  };

  const handleOrderingChange = (ordering) => {
    setSelectedOrdering(ordering);
    setSelectedGrouping(null);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn"><HiAdjustmentsHorizontal/>Display</button>
      <div className="dropdown-content">
        <div className="dropdown-section">
          <button className='button' onClick={() => handlePageChange('Grouping')}>Grouping</button>
          {selectedPage === 'Grouping' && (
            <div className="submenu">
              <button className='button' onClick={() => handleGroupingChange('Status')}>Status</button>
              <button className='button' onClick={() => handleGroupingChange('User')}>User</button>
              <button className='button' onClick={() => handleGroupingChange('Priority')}>Priority</button>
            </div>
          )}
        </div>
        <div className="dropdown-section">
          <button className='button' onClick={() => handlePageChange('Ordering')}>Ordering</button>
          {selectedPage === 'Ordering' && (
            <div className="submenu">
              <button className='button' onClick={() => handleOrderingChange('Priority')}>Priority</button>
              <button className='button' onClick={() => handleOrderingChange('Title')}>Title</button>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default DropdownMenu;
