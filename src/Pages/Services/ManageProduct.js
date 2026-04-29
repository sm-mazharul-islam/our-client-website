import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Rating, Stack } from '@mui/material';



const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/addProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const handleDelete = id => {
        const url = `http://localhost:7000/addProducts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {

                    alert('Deleted')
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);

                }


            })
    }

    return (
        <div>
            <h1>manage Services</h1>
            {/* {
                products.map(service => <div key={service._id}>
                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            } */}

            {/*  */}

            <TableContainer component={Paper} style={{ padding: '90px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Brand Name</TableCell>
                            <TableCell align="right">Rating</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Delete</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((service) => (
                            <TableRow
                                key={service._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {service.name}
                                </TableCell>
                                <TableCell align="right">
                                    {service.rating}
                                    {/* <Stack spacing={1} >
                                        <Rating name="half-rating-read" defaultValue={service.rating} readOnly />
                                    </Stack> */}
                                </TableCell>
                                <TableCell align="right">{service.balance}</TableCell>

                                <TableCell align="right">    <IconButton aria-label="delete" onClick={() => handleDelete(service._id)}>
                                    <DeleteIcon />
                                </IconButton></TableCell>
                                <TableCell align="right">{service.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </div>
    );
};

export default ManageProduct;