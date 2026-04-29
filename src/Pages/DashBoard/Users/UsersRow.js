import React from 'react';
import './UsersRow.css'

const UsersRow = ({row}) => {
    const{email, displayName, role} = row
    return (
        <>
   
    {/* <tr>
      <td data-label="Account">{email}</td>
      <td data-label="Due Date">04/01/2016</td>
      <td data-label="Amount">$1,190</td>
      <td data-label="Period">03/01/2016 - 03/31/2016</td>
    </tr> */}
    <tr>
      <td scope="row" data-label="Account">{email}</td>
      <td data-label="Due Date">{displayName}</td>
      <td data-label="Amount">{role}</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
  
      {/* <td scope="row" data-label="Account">Corporate AMEX</td>
      <td data-label="Due Date">03/01/2016</td>
      <td data-label="Amount">$1,181</td>
      <td data-label="Period">02/01/2016 - 02/29/2016</td>
  
      <td scope="row" data-label="Acount">Visa - 3412</td>
      <td data-label="Due Date">02/01/2016</td>
      <td data-label="Amount">$842</td>
      <td data-label="Period">01/01/2016 - 01/31/2016</td> */}
    </tr>
    
      </>
      
    );
};

export default UsersRow;