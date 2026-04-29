
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid, IconButton, TablePagination } from '@mui/material';
import UserForm from '../Services/Testimonial/UserForm';
import UseAuth from '../../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import './DashBoardHome.css'

const DashBoardHome = () => {
    const {user} = UseAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
      const url = `http://localhost:7000/order?email=${user.email}`
      fetch(url)
          .then(res => res.json())
          .then(data => setProducts(data))
  })

  const handleDelete = id  => {
    const url = `http://localhost:7000/order/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount) {

                alert('Deleted')
                const remaining = products.filter(service => service._id !==  id);
                setProducts(remaining);

            }


        })




      }

 
    return (
<div>
<h1>Ordered Item: {products.length}</h1>
<Grid container spacing={2}>
  <Grid item xs={12} sm={4}>
    {/* <UserForm></UserForm> */}
  </Grid>
  <Grid item xs={12} sm={12}>

  

  {/* <TableContainer component={Paper} >
                <Table sx={{minWidth: 650 }} aria-label="car table">
                    <TableHead>
                        <TableRow>
                            <TableCell >              Order Email</TableCell>
                            <TableCell align="right"> Car Name</TableCell>
                            <TableCell align="right"> Customer Name</TableCell>
                            <TableCell align="right"> Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ marginRight: '40px' }}>
                             
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.packageName}</TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                        
                                <TableCell align="right">{row.payment ? 'Paid' :
                                <Link to={`/dashboard/payment/${row._id}`}><button>pay</button></Link>
                                }</TableCell>
                                <TableCell align="right" > <IconButton aria-label="delete" onClick={() => handleDelete(row._id)} >
                             <DeleteIcon />
                                </IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
             */}
            
            <div class="container">

  <table class="rwd-table">
    <tbody>
      <tr>
   
{/* 

 */}
        <th>   Order Email</th>
        <th>Car Name</th>
        <th>Customer Name</th>
        <th>Car Image</th>
        <th>Payment</th>
        <th>Cancel</th>
      </tr>
      {products.map((row) => (
      <tr>
        <td data-th=" Order Email">

        {row.email}
    
        </td>
        {/* // <td data-th="Supplier Name">
        //   UPS
        // </td>
        // <td data-th="Invoice Number">
        //   ASDF19218
        // </td>
        // <td data-th="Invoice Date">
        //   06/25/2016
        // </td>
        // <td data-th="Due Date">
        //   12/25/2016
        // </td>
        // <td data-th="Net Amount">
        //   $8,322.12
        // </td> */}
          <td data-th="Car Name">
          {row.packageName}
        </td>
          <td data-th="Customer Name">
          {row.Name}
        </td>
          <td data-th="Car Image">
        <img style={{width:'160px',height:'100px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',borderRadius:'15px'}} src={row.packageImg
} alt="" />
        </td>
          <td data-th="Payment">
          {row.payment ? 'Paid' :
                                <Link to={`/dashboard/payment/${row._id}`}><button>pay</button></Link>
                                }
        </td>
          <td data-th="Delete">
          <IconButton aria-label="delete" onClick={() => handleDelete(row._id)} >
                             <DeleteIcon /> </IconButton>
        </td>
      </tr>
        ))}
      {/* <tr>
        <td data-th="Supplier Code">
        
        </td>
        <td data-th="Supplier Name">
          UPS South Inc.
        </td>
        <td data-th="Invoice Number">
          ASDF29301
        </td>
        <td data-th="Invoice Date">
          6/24/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $3,255.49
        </td>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          BOX5599
        </td>
        <td data-th="Supplier Name">
          BOX Pro West
        </td>
        <td data-th="Invoice Number">
          ASDF43000
        </td>
        <td data-th="Invoice Date">
          6/27/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $45,255.49
        </td>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          PAN9999
        </td>
        <td data-th="Supplier Name">
          Pan Providers and Co.
        </td>
        <td data-th="Invoice Number">
          ASDF33433
        </td>
        <td data-th="Invoice Date">
          6/29/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $12,335.69
        </td>
      </tr> */}
    </tbody>
  </table>
  <h3  className='review'>Review Your Order</h3>
</div>
           





  </Grid>
</Grid>
</div>
    );
};

export default DashBoardHome;