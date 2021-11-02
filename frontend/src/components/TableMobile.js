import React, { useState } from "react";
import "./TableMobile.css";
import Table from "react-bootstrap/Table";

const TableMobile = () => {
  const [isOpened750, setIsOpened750] = useState(false);
  const [isOpened1000, setIsOpened1000] = useState(false);
  const [isOpened1500, setIsOpened1500] = useState(false);
  const [isOpened2000, setIsOpened2000] = useState(false);

  function toggle750() {
    setIsOpened750((wasOpened) => !wasOpened);
  }

  function toggle1000() {
    setIsOpened1000((wasOpened) => !wasOpened);
  }

  function toggle1500() {
    setIsOpened1500((wasOpened) => !wasOpened);
  }

  function toggle2000() {
    setIsOpened2000((wasOpened) => !wasOpened);
  }

  return (
    <>
      <p className="tab_title">
        <strong>Prices according kcal and days quantity</strong>
      </p>
      <Table striped bordered hover size="sm" className="table_mobile">
        <thead className="tableTitle" onClick={toggle750}>
          <th>Weight Lose, 750 kcal</th>
        </thead>
        {isOpened750 && (
          <tbody className="tableContent">
            <tr>
              <td>2 days</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td>6 days</td>
              <td>35 €</td>
            </tr>
            <tr>
              <td>12 days</td>
              <td>30 €</td>
            </tr>
            <tr>
              <td>20 days</td>
              <td>25 €</td>
            </tr>
            <tr>
              <td>24 days</td>
              <td>20 €</td>
            </tr>
            <tr>
              <td>30 days</td>
              <td>15 €</td>
            </tr>
          </tbody>
        )}
        <thead className="tableTitle" onClick={toggle1000}>
          <th>Weight Lose, 1000 kcal</th>
        </thead>
        {isOpened1000 && (
          <tbody className="tableContent">
            <tr>
              <td>2 days</td>
              <td>45 €</td>
            </tr>
            <tr>
              <td>6 days</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td>12 days</td>
              <td>35 €</td>
            </tr>
            <tr>
              <td>20 days</td>
              <td>30 €</td>
            </tr>
            <tr>
              <td>24 days</td>
              <td>25 €</td>
            </tr>
            <tr>
              <td>30 days</td>
              <td>20 €</td>
            </tr>
          </tbody>
        )}
        <thead className="tableTitle" onClick={toggle1500}>
          <th>Weight Lose, 1500 kcal</th>
        </thead>
        {isOpened1500 && (
          <tbody className="tableContent">
            <tr>
              <td>2 days</td>
              <td>50 €</td>
            </tr>
            <tr>
              <td>6 days</td>
              <td>45 €</td>
            </tr>
            <tr>
              <td>12 days</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td>20 days</td>
              <td>35 €</td>
            </tr>
            <tr>
              <td>24 days</td>
              <td>30 €</td>
            </tr>
            <tr>
              <td>30 days</td>
              <td>25 €</td>
            </tr>
          </tbody>
        )}
        <thead className="tableTitle" onClick={toggle2000}>
          <th>Weight Lose, 2000 kcal</th>
        </thead>
        {isOpened2000 && (
          <tbody className="tableContent">
            <tr>
              <td>2 days</td>
              <td>55 €</td>
            </tr>
            <tr>
              <td>6 days</td>
              <td>50 €</td>
            </tr>
            <tr>
              <td>12 days</td>
              <td>45 €</td>
            </tr>
            <tr>
              <td>20 days</td>
              <td>40 €</td>
            </tr>
            <tr>
              <td>24 days</td>
              <td>35 €</td>
            </tr>
            <tr>
              <td>30 days</td>
              <td>30 €</td>
            </tr>
          </tbody>
        )}
      </Table>
    </>
  );
};

export default TableMobile;
