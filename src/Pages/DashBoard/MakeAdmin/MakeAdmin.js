import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth';



const MakeAdmin = () => {

    const [email, setEmail] = useState('')
     const [success, setSuccess] = useState(false);
     const {token} = UseAuth();

const handleOnBlur = e =>{
setEmail(e.target.value);
}
    const handleAdminSubmit = e =>{
const user ={email};
        fetch('http://localhost:7000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },

          body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                setSuccess(true);
            console.log(data)
            }
        })


        e.preventDefault()
    }
    return (
        
        <div>
            <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField id="standard-basic" sx={{paddingBottom:'40px', width:'50%'}}label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            <br />
            <Button type="submit" variant='contained'>Create Admin</Button>
            </form>
            {success && <Alert severity="success" style={{ margin: '50px' }} >Made Admin Successfully</Alert>}
          




        </div>
       
    );
};

export default MakeAdmin;