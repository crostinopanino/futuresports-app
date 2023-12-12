import React from 'react';

const Table = ({ headers, data, renderRow, onRegisterClick }) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => renderRow(item, index, onRegisterClick))}
    </tbody>
  </table>
);

export default Table;
