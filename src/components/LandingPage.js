import React from 'react'
import Button from './Button'
import Table from './Table'

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    handleCLick = () => {
        
    }

    render(){
        return(
            <>
                <Button/>
                <Table/>
            </>
        )
    }

}

export default LandingPage