import React, { useState } from 'react';


const data = [
  { month: 'Jan 2023', status: 'PENDING', completion: 20, unit: 'Business Unit 1' },
  { month: 'Feb 2023', status: 'APPROVED', completion: 30, unit: 'Business Unit 1' },
  { month: 'Mar 2023', status: 'INCOMPLETE', completion: 50, unit: 'Business Unit 1' },
];
const Tracker = ()=>{
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.unit.toLowerCase().includes(value) ||
      item.status.toLowerCase().includes(value) ||
      item.month.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="tracker-main-section">
      <div className="header">
        <div>Pending Trackers</div>
        <div>Pending Reviews</div>
      </div>
      <input type="search" placeholder="Search for a business unit" onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Status</th>
            <th>Completion %</th>
            <th>Business Unit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.month}</td>
              <td>{item.status}</td>
              <td>{item.completion}%</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Tracker;