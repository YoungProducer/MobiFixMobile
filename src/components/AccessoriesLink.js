import React from 'react'
import { NavLink } from 'react-router-dom'

class AccessoriesLink extends React.Component {
    render() {
        return(
            <NavLink 
                to="/accessories"
            >accessories</NavLink>
        )
    }
}

export default AccessoriesLink