import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class NavBar extends Component{
    state = {
        active: false
    }
    activate = event=> {
        if(this.state.active === true){
            this.setState({active: false})
        }else{
        this.setState({active: true})
        }
    }
    render(){
        function showMenu(state, activate){
            if(state.active === true){
                return(
                    <div className="menu">
                        <Link to='/' className="menuLink" onClick={activate}>Home</Link><br/>
                        <Link to='/about' className="menuLink" onClick={activate}>About</Link><br/>
                        <Link to='/search' className="menuLink" onClick={activate}>Find an Item</Link><br/>
                        <Link to='/post' className="menuLink" onClick={activate}>Post an Item</Link><br/>
                        <Link to='/lookup' className="menuLink" onClick={activate}>Lookup a Post</Link><br/>
                    </div>
                )
            }else{
                return(
                    null
                )
            }
        }
        return(
            <div className="nav">
                <div className="bigMenu">
                    <Link to='/' className="menuLink">Found</Link>
                    <Link to='/about' className="menuLink">About</Link>
                    <Link to='/search' className="menuLink">Find an Item</Link>
                    <Link to='/post' className="menuLink">Post an Item</Link>
                    <Link to='/lookup' className="menuLink">Lookup a Post</Link>
                </div>
                <div className='burger' onClick={this.activate}>
                    <span></span>
				    <span></span>
			        <span></span>
                </div>
                {showMenu(this.state, this.activate)}
            </div>
        )
    }
}

export default withRouter(NavBar)