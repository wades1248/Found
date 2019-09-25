import React, {Component} from 'react';

class PostConfirm extends Component {
    close = event => {
        this.props.onClose()
    }
    render(){
        return(
            <div className="popUp">
                <div className="confirmation">
                    <h2>Thanks for Posting!</h2>
                    <p>Please save the following identification number in order 
                        to edit or delete this post in the future</p>
                    <p>Confirmation Number:{this.props.item.id}</p>
                    <button onClick={this.close}>Close</button>
                </div>
            </div>
        )
    }
}
export default PostConfirm