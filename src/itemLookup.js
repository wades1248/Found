import React, {Component} from 'react'

class ItemLookup extends Component{
    onSubmit = event => {
        event.preventDefault()
        this.props.clearLookup()
        const {confirmation} = event.target
        this.props.onLookup(confirmation.value)
        event.target.reset()
    }
    onDelete = () => {
        this.props.onDelete(this.props.lookupResults.confirmation)
    }
    componentDidMount(){
        this.props.clearLookup()
    }
    render(){
        function displayItem(results, onDelete){
            if(results === null){
                return null
            }else if(results === 'error'){
                return(
                    <p className="shout">Item Not Found</p>
                )
            }else{
                return(
                    <div className="resultsItem">
                        <h2>{results.business}</h2>
                        <p>{results.phone}</p>
                        <p>{results.city}</p>
                        <p>{results.itemtype}</p>
                        <p>Tags: {results.description}</p>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                )
            }
        }
        return(
            <div >
                <form onSubmit={this.onSubmit} className="lookup">
                    <legend>Lookup Item</legend>
                    <p>Please enther the confirmation number below of the post you would like to view.</p>
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

