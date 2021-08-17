import React from 'react'
 
const GetUsersButton = (props) => {
    return (
        <button onClick={props.getUsers} className={"get-users-button"}>
          CLICK TO GET USERS
        </button>
    )
};
 

export default GetUsersButton;