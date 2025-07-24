import React from 'react';

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div style={{ margin: "20px auto", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default Filter;
