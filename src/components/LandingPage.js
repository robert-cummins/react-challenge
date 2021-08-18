import React from "react"
import GetUsersButton from './Button'
import UserTable from './UserTable'
import UserAPI from '../api/Users'
import Container from '@material-ui/core/Container'

const LandingPage = () => {

    const [users, setUsers] = React.useState([])

    const getUsers = () => {
        UserAPI.getUsers().then((response) => {
            setUsers(response.data.results)
        })
    }


    return (
        <Container  maxWidth="lg">
            {users.length === 0 ?
                <GetUsersButton getUsers={getUsers} /> :
                <UserTable users={users} />
            }
        </Container>
    )
}

export default LandingPage