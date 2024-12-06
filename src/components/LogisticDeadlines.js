import React, { useState, useEffect } from 'react';

const LogisticDeadlines = () => {
  const [deadlines, setDeadlines] = useState([]);

  // Simulate fetching data from an API or database
  useEffect(() => {
    const fetchedDeadlines = [
      { id: 1, task: 'Package Delivery', deadline: '2024-12-10', status: 'Pending' },
      { id: 2, task: 'Warehouse Organization', deadline: '2024-12-12', status: 'In Progress' },
      { id: 3, task: 'Inventory Update', deadline: '2024-12-15', status: 'Completed' },
    ];
    setDeadlines(fetchedDeadlines);
  }, []);

  return (
    <div>
      <h2>Logistic Deadlines</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((deadline) => (
            <tr key={deadline.id}>
              <td>{deadline.task}</td>
              <td>{deadline.deadline}</td>
              <td>{deadline.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogisticDeadlines;
