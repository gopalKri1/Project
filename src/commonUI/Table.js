import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { AddAccount } from "../components/List/subComponets";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData,
  setEditAccountValue,
}) => {
  const [value, setValue] = useState(initialValue);
  const isAccountField = id == "account_no";

  const onChange = ({ target: { value } }) => {
    setValue(value);
    if (isAccountField) setEditAccountValue(value);
  };
  const onBlur = () => {
    updateMyData(index, id, value);
    if (isAccountField) setEditAccountValue(value);
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      placeholder={
        isAccountField ? "Enter Account Number" : "Enter reference ID(optional)"
      }
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
const defaultColumn = {
  Cell: EditableCell,
};
function Table({ columns, data, updateMyData, addrow, setEditAccountValue }) {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
        updateMyData,
        setEditAccountValue
      },
      usePagination
    );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <AddAccount>
            <span onClick={addrow}>+ Add Another Account</span>
          </AddAccount>
        </tbody>
      </table>
    </>
  );
}
export default Table;
