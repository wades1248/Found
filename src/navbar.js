import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <div className="nav">
                <Link to='/'>Found</Link>
                <Link to='/about'>About</Link>
                <Link to='/search'>Find an Item</Link>
                <Link to='/post'>Post an Item</Link>
            </div>
        )
    }
}

export default withRouter(NavBar)