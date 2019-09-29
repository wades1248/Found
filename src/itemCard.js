import React, {Component} from 'react'

class ItemCard extends Component {
    state = {
        active: false,
        error: null
    }
    handlSubmit = event => {
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
        this.setState({active: true})
    }
    render(){
        function displayConfirm(state, handlSubmit){
            if(state.active===true){
                return(
                    <form onSubmit={handlSubmit}>
                        <label>
                            Cofirmation Number:
                            <input type='text' name='input' required/>
                        </label>
                        <p className="error">{state.error}</p>
                        <button type='submit'>Submit</button>
                    </form>
                )
            }else{
                return(null)
            }
        }
        return(
            <div className="resultsItem">
                    <h2>{this.props.item.business}</h2>
                    <p>{this.props.item.city}</p>
                    <p>{this.props.item.phone}</p>
                    <p>{this.props.item.itemtype}</p>
                    <p>Tags: {this.props.item.description}</p>
                    <button onClick={this.showInput}>Delete</button>
                    <div>{displayConfirm(this.state, this.handlSubmit)}</div>
                </div>
        )
    }
}
export default ItemCard;