import React, {Component} from 'react'
import ItemCard from './itemCard'

class Search extends Component{
    state= {
        cityError: null,
        typeError: null,
        clicked: false
    }
    validateSearch= event=> {
        event.preventDefault()
        this.setState({
            cityError: null,
            typeError: null, 
            clicked: true
        })
        const {city, business, itemType, description} = event.target
        const filterDescription = description.value.toLowerCase().split(' ').filter(
            x=> x!== 'a' && x!=='an' && x!== 'the' && x !=='with' && x!=='and')
        const query = {
            city: city.value.toLowerCase(),
            business: business.value.toLowerCase(),
            itemType: itemType.value.toLowerCase(),
            description: filterDescription
        }
        const testCity = query.city.trim()
        if(testCity.length === 0){
            this.setState({
                cityError: 'Please enter a valid city'})
        }
        else if(query.itemType === '--'){
            this.setState({
                typeError: "Please select an item type"
            })
        }else{
            this.props.searchQuery(query)
            event.target.reset()
        }
        
    }
    componentDidMount(){
        this.props.resetResults()
    }
    render(){
        function showResults(results, state, onDelete){
            const solution =results.map(x =>{
                return(
                    <ItemCard item={x} key={x.confirmation} onDelete={onDelete}/>
                )}
            ) 
            if(state.clicked===false){
                return null
            }else if(results.length === 0){
                return <p className="shout">Sorry, your search did not return any results at this time.</p>
            }else{
                return solution
            }
        }
        return(
            <div  id="search">
                <form onSubmit={this.validateSearch} className="search">
                    <legend>Find an Item</legend>
                    <label>
                        City:
                        <input type="text" placeholder="Saint Paul" name="city" required maxLength="40"/>
                    </label>
                    <div className="error">{this.state.cityError}</div>
                    <label>
                        Business:
                        <input type="text" placeholder='Business Name' name="business" maxLength="40"/>
                    </label>
                    <label>Item type:
                    <select name="itemType">
                        <option>--</option>
                        <option>Credit Card</option>
                        <option>Wallet</option>
                        <option>Clothing</option>
                        <option>Phone</option>
                        <option>Keys</option>
                        <option>Other</option>
                    </select>
                    </label>
                    <div className="error">{this.state.typeError}</div>
                    <label>Description:
                        <input type="text" placeholder="Color, Size, etc" name="description" maxLength="40"/>
                    </label>
                    <div className="error">{this.state.error}</div>
                    <button type="submit">Search</button>
                </form>
                <div className="searchResults">{showResults(this.props.results, this.state, this.props.onDelete)}</div>
            </div>
        )
    }
}
export default Search;