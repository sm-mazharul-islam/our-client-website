import React from "react";
import { useEffect } from "react";

const ManageOrder = () => {
  useEffect(() => {
    fetch("http://localhost:7000/order")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>This is manageOrder</h2>
    </div>
  );
};

export default ManageOrder;
