import React from "react";
import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-item: center;
  justify-content: center;
  flex-direction: column;

  table {
    border-spacing: 0;
    background-color: white;
    border-radius: 15px 15px 15px 15px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      background-color: blue;
      color: white;
      padding: 0.5rem;
      :last-child {
        border-radius: 0 15px 0 0;
      }
      :first-child {
        border-radius: 15px 0 0 0;
      }
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 5px solid #f0f8ff;
      border-right: 5px solid #f0f8ff;

      :last-child {
        border-right: 0;
      }
      :first-child {
        border-right: 0;
      }

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
        min-width: 100%;
        max-width: 100%;
        border-width: 0px;
        border: none;
        :focus {
          outline: none !important;
        }
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export const AddAccount = styled.div`
  color: blue;
  font-weight: 400;
  margin: 16px;
  width: 100%;
`;

export const Summary = styled.div`
  color: blue;
  font-weight: 400;
  margin: 16px;
  width: 100%;
  cursor: pointer;
  span {
    font-weight: 600;
  }
`;

export const Title = styled.div`
  color: blue;
  font-weight: 400;
  margin: 16px;
  width: 100%;
`;

const AlertContainer = styled.div`
  color: red;
  font-weight: 400;
`;

export const ListAlert = ({ value, value: { length } }) => {
  const invalidPrefixList = ["21", "22"];
  const isInvalidPrefix = invalidPrefixList.indexOf(value.slice(0, 2)) >= 0;
  const inValidLength = length !== 12;
  return (
    <AlertContainer>
      {isInvalidPrefix && (
        <span>
          Please ensure that all accounts numbers should start with '21' or '22
        </span>
      )}
      {inValidLength && (
        <>
          <br />
          <span>
            Please ensure that all accounts numbers are '12' digits long
          </span>
        </>
      )}
    </AlertContainer>
  );
};
