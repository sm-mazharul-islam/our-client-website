import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageProduct from '../Services/ManageProduct';

const ManageOrder = () => {
    const [allOrder, allPersonOrder]= useState([])
    useEffect(()=>{
        fetch('http://localhost:7000/order')
        .then(res => res.json())
        .then(data => console.log(data))

    },[])
    return (
        <div>
            <h2>This is manageOrder</h2>
          
        </div>
    );
};

export default ManageOrder;