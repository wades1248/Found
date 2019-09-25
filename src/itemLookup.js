import React, {Component} from 'react'

class ItemLookup extends Component{
    onSubmit = event => {
        event.preventDefault()
        this.props.clearLookup()
        const {confirmation} = event.target
        console.log(confirmation.value)
        this.props.onLookup(confirmation.value)
    }
    onDelete = () => {
        this.props.onDelete(this.props.lookupResults.confirmation)
    }
    render(){
        function displayItem(results, onDelete){
            if(results === null){
                return null
            }else if(results === 'error'){
                return(
                    <p>Item Not Found</p>
                )
            }else{
                return(
                    <div>
                        <h2>{results.business}</h2>
                        <p>{results.city}</p>
                        <p>{results.itemType}</p>
                        <p>Tags: {results.description.join(', ')}</p>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                )
            }
        }
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <legend>Lookup Item</legend>
                    <label>Confirmation Number: 
                        <input type ="text" placeholder="Confirmation Number" name='confirmation' required></input>
                    </label>
                    <button type="submit">Lookup</button>
                </form>
                {displayItem(this.props.lookupResults, this.onDelete)}
            </div>
        )
    }
}
export default ItemLookup

