import axios from "axios"

const USERS_REST_API_URL = 'https://randomuser.me/api/?page=1&results=25&seed=abc'

class UsersAPI {
    
    getUsers(){
       return axios.get(USERS_REST_API_URL)
    }
}

export default new UsersAPI()