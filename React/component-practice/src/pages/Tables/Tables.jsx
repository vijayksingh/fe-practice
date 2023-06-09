/* eslint-disable */

import { useState } from "react";
import Pagination from "./Pagination";

import { filterRow } from "./helper";

function Table({ columns, rows }) {
  let [activePage, setActivePage] = useState(1); // State
  // 
  const [filter, setFilter] = useState({});

  const filteredRows = filterRow(filter, rows);

  const count = filteredRows.length;
  const rowsPerPage = 3;
  const totalPages = Math.ceil(count / rowsPerPage); // Derived State


  const calculatedRows = filteredRows.slice(
    // 9 - 12
    (activePage - 1) * rowsPerPage,
    activePage * rowsPerPage
  );

  const handleSearch = (value, column) => {
    setActivePage(1);
    if (value) {
      setFilter((filter) => ({
        ...filter,
        [column]: value,
      }));
    } else {
      // Remove a filtered value
      const updatedFilter = { ...filter };
      delete updatedFilter[column];

      setFilter({ ...updatedFilter });
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={column.accessor}>
                {column.label}
                </th>;
            })}
          </tr>
          <tr>
            {columns.map((column) => {
              return (
                <th key={`search-${column.accessor}`}>
                  <input
                    type="search"
                    onChange={(event) =>
                      handleSearch(event.target.value, column.accessor)
                    }
                    placeholder={column.label}
                  ></input>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {calculatedRows.map((row) => {
            return (
              <tr key={row.id}>
                {columns.map((column) => {
                  if (column.format) {
                    return (
                      <td key={column.accessor}>
                        {column.format(row[column.accessor])}
                      </td>
                    );
                  }
                  return <td key={column.accessor}>{row[column.accessor]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        count={count}
        rowsPerPage={rowsPerPage}
        totalPages={totalPages}
        setActivePage={setActivePage}
      />
    </>
  );
}

export default Table;
