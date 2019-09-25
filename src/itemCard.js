import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ItemCard extends Component {
    render(){
        return(
            <div className="resultsItem">
                    <h2>{this.props.item.business}</h2>
                    <p>{this.props.item.city}</p>
                    <p>{this.props.item.itemType}</p>
                    <p>Tags: {this.props.item.description.join(", ")}</p>
                    <Link to='/lookup'><button>Delete</button></Link>
                </div>
        )
    }
}
export default ItemCard;