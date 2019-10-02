import React, {Component} from 'react'

class ItemCard extends Component {
    state = {
        active: false,
        error: null
    }
    tellLink =`tel: 1+${this.props.item.phone}`
    handleSubmit = event => {
        event.preventDefault()
        const {input} = event.target
        const conf = input.value
        if(conf === this.props.item.confirmation){
          this.props.onDelete(this.props.item.confirmation)
          event.target.reset()  
        }else{
            this.setState({
                error: 'Invalid Confirmation'
            })
        }
        
    }
    showInput = () => {
        if(this.state.active === false){
            this.setState({active: true})
        }else{
            this.setState({active: false})
        }
    }
    render(){
        function displayConfirm(state, handleSubmit, showInput){
            if(state.active===true){
                return(
                    <div className="popUp">
                        <form onSubmit={handleSubmit} className="confirmation">
                            <label>
                                Cofirmation Number:
                                <input type='text' name='input' required/>
                            </label>
                            <p className="error">{state.error}</p>
                            <div className="itemsButtons">
                                <button type='submit'>Submit</button>
                                <button onClick={showInput}>Close</button>
                            </div>
                        </form>
                    </div>
                )
            }else{
                return(null)
            }
        }
        return(
            <div className="resultsItem">
                    <h2>{this.props.item.business}</h2>
                    <p>{this.props.item.city}</p>
                    <p>Phone: <a href={this.tellLink}>{this.props.item.phone}</a></p> 
                    <p>{this.props.item.itemtype}</p>
                    <p>Tags: {this.props.item.description}</p>
                    <button onClick={this.showInput}>Delete</button>
                    <div>{displayConfirm(this.state, this.handleSubmit, this.showInput)}</div>
                </div>
        )
    }
}
export default ItemCard;