import React, { useEffect} from "react";
import Button from './Button'
import UserTable from './UserTable'
import UserAPI from '../api/Users'

const LandingPage = () => {

    const [users, setUsers] = React.useState([])

    useEffect(() => {
        UserAPI.getUsers().then((response) => {
            setUsers(response.data.results)
        })
    })


    return (
        <>
            {/* <Button /> */}
            <UserTable users={users} />
        </>
    )


}

export default LandingPage