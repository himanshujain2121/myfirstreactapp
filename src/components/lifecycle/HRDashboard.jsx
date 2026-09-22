import React, { useState } from 'react';
import EmployeeProfile from './EmployeeProfile';

const HRDashboard = () => {
  const [selectedId, setSelectedId] = useState(101);
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>HR Dashboard: Employee Management</h2>
      
      {/* Controls to switch employees or unmount the view */}
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setSelectedId(101)}>Load Employee 101</button>
        <button onClick={() => setSelectedId(102)}>Load Employee 102</button>
        <button onClick={() => setSelectedId(103)}>Load Employee 103</button>
        <button 
          onClick={() => setShowProfile(!showProfile)}
          style={{ backgroundColor: '#ffc107', border: 'none', cursor: 'pointer', padding: '5px 10px' }}
        >
          {showProfile ? 'Close Profile (Unmount)' : 'Open Profile (Mount)'}
        </button>
      </div>

      <hr />

      {/* Conditionally render profile based on HR action */}
      {showProfile ? (
        <EmployeeProfile employeeId={selectedId} />
      ) : (
        <p style={{ color: '#666' }}>No employee profile currently open.</p>
      )}
    </div>
  );
};

export default HRDashboard;