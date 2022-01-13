import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillDelete } from "react-icons/ai";

import Table from "../../commonUI/Table";
import { addRow, deleterow, updaterow } from "../../redux/actions/ListActions";

import { ListAlert, ListContainer, Summary, Title } from "./subComponets";

const List = () => {

  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [editAccountValue, setEditAccountValue] = useState("");

  const columns = React.useMemo(
    () => [
      {
        Header: "NO.",
        id: "no",
        accessor: () => "no",
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
      },
      {
        Header: "Account No.",
        accessor: "account_no",
      },
      {
        Header: "Reffer ID",
        accessor: "reffer_id",
      },
      {
        Header: " ",
        id: "delete",
        accessor: () => "delete",
        Cell: (tableProps) => (
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={() => {
              dispatch(deleterow(tableProps.row.index));
            }}
          >
            <AiFillDelete color="grey" />
          </span>
        ),
      },
    ],
    [data]
  );

  const updateMyData = (rowIndex, columnId, value) => {
    dispatch(updaterow({ rowIndex, columnId, value }));
  };
  const addNewRow = () => {
    dispatch(addRow());
  };

  return (
    <ListContainer>
      <Title>Mannually add your child accounts</Title>
      {editAccountValue && <ListAlert value={editAccountValue} />}
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        addrow={addNewRow}
        setEditAccountValue={setEditAccountValue}
      />
      <Summary>You are manually adding <span>{data.length} child accounts.</span></Summary>
    </ListContainer>
  );
};

export default List;
