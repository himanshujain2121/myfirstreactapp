import React, { useState, useEffect } from 'react';

const EmployeeProfile = ({ employeeId }) => {
  const [activityCount, setActivityCount] = useState(0);

  // 1. Mount & Unmount (useEffect with empty dependency array [])
  useEffect(() => {
    console.log(`[Mount] Employee Profile for ID: ${employeeId} loaded.`);

    return () => {
      console.log(`[Unmount] Employee Profile for ID: ${employeeId} closed/removed.`);
    };
  }, [employeeId]); // Re-runs mount/cleanup if the employee ID changes

  // 2. Component Update (useEffect tracking activityCount)
  useEffect(() => {
    console.log(`[Update] Employee ID ${employeeId} activity count updated to: ${activityCount}`);
  }, [activityCount, employeeId]);

  return (
    <div style={{ border: '2px solid #28a745', padding: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h3>Employee Profile</h3>
      <p><strong>Active Employee ID:</strong> {employeeId}</p>
      <p><strong>Performance Logs:</strong> {activityCount}</p>
      
      <button 
        onClick={() => setActivityCount(prev => prev + 1)}
        style={{ padding: '6px 12px', cursor: 'pointer' }}
      >
        Log Activity
      </button>
    </div>
  );
};

export default EmployeeProfile;