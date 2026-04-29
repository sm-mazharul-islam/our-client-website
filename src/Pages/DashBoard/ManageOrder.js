import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../utils/constants";

const ManageOrder = () => {
  useEffect(() => {
    fetch(`${BASE_URL}/order`)
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
