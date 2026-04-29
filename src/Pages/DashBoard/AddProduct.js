import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import "../DashBoard/AddProduct.css";
import ManageProduct from "../Services/ManageProduct";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:7000/addProducts", data).then((res) => {
      if (res.data.insertedId) {
        alert("Information Collected");
        reset();
      }
    });
  };
  return (
    <div className="buy-now">
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        ></input>
        <input {...register("picture")} placeholder="picture" />
        <input type="number" {...register("balance")} placeholder="balance" />
        <input type="number" {...register("rating")} placeholder="rating" />
        <textarea {...register("about")} placeholder="about" />
        <input type="submit" />
      </form>
      <ManageProduct></ManageProduct>
    </div>
  );
};

export default AddProduct;
