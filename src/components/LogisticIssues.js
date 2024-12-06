import React, { useState, useEffect } from 'react';

const LogisticIssues = () => {
  const [issues, setIssues] = useState([]);

  // Simulate fetching issues data
  useEffect(() => {
    const fetchedIssues = [
      { id: 1, issue: 'Delayed Shipment', description: 'Shipment stuck due to weather conditions', status: 'Open' },
      { id: 2, issue: 'Damaged Package', description: 'Package was damaged during transit', status: 'Resolved' },
      { id: 3, issue: 'Wrong Address', description: 'The recipient address is incorrect', status: 'Open' },
    ];
    setIssues(fetchedIssues);
  }, []);

  return (
    <div>
      <h2>Logistic Issues</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.issue}</td>
              <td>{issue.description}</td>
              <td>{issue.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogisticIssues;
