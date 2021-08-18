import React, { useEffect } from "react"
import GetUsersButton from './Button'
import UserTable from './UserTable'
import UserAPI from '../api/Users'
import Container from '@material-ui/core/Container'

const LandingPage = () => {

    const [users, setUsers] = React.useState([])
    const [callAPI, setCallAPI] = React.useState(false)

    const getUsers = () => {
        setCallAPI(true)
    }

    useEffect(() => {
        if(callAPI === true){
            UserAPI.getUsers().then((response) => {
                setUsers(response.data.results)
            })
        }
    },[callAPI])


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