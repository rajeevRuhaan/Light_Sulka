import React from "react";
import Table from "react-bootstrap/Table";

const Prices = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Programs</th>
            <th>per day</th>
            <th>2 days</th>
            <th>6 days</th>
            <th>12 days</th>
            <th>20 days</th>
            <th>24 days</th>
            <th>30 days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Weight Lose 750 kcal</td>
            <td>4 meals</td>
            <td>40</td>
            <td>35</td>
            <td>30</td>
            <td>25</td>
            <td>20</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Weight lose 1000 kcal</td>
            <td>5 meals</td>
            <td>45</td>
            <td>40</td>
            <td>35</td>
            <td>30</td>
            <td>25</td>
            <td>20</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Weight lose 1500 kcal</td>
            <td>6 meals</td>
            <td>50</td>
            <td>45</td>
            <td>40</td>
            <td>35</td>
            <td>30</td>
            <td>25</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Weight lose 2000 kcal</td>
            <td>6 meals</td>
            <td>55</td>
            <td>50</td>
            <td>45</td>
            <td>40</td>
            <td>35</td>
            <td>30</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Prices;
