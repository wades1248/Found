import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Welcome extends Component {
    render(){
        return(
            <div className="landing">
                <h2>Welcome to Found!</h2> 
                <p>Have you lost an item at a local business? Have you found a lost item at your business? Found can help!</p>
                <Link to='/search'><button>Find and Item</button></Link>
                <Link to='/post'><button>Post an Item</button></Link>
            </div>
        )
    }
}
export default withRouter(Welcome)