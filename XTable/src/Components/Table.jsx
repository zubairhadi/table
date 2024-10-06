import React, { useState } from "react";
import data from "../data/data.js";

const Table = () => {
  const [tableData, setTableData] = useState(data);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      return dateComparison !== 0 ? dateComparison : b.views - a.views;
    });
    setTableData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = b.views - a.views;
      return dateComparison !== 0
        ? dateComparison
        : new Date(b.date) - new Date(a.date);
    });
    setTableData(sortedData);
  };

  return (
    <div>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.views}</td>
              <td>{entry.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
