import React, {Component} from 'react'
import ItemCard from './itemCard'

class Search extends Component{
    state= {
        cityError: null,
        typeError: null,
    }
    validateSearch= event=> {
        event.preventDefault()
        this.setState({
            cityError: null,
            typeError: null
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
        }
        
    }
    
    render(){
        const results = this.props.results.map(x =>{
            return(
                <ItemCard item={x} key={x.confirmation}/>
            )
        })
        return(
            <div className="search" id="search">
                <form onSubmit={this.validateSearch}>
                    <legend>Find an Item</legend>
                    <label>
                        City
                        <input type="text" placeholder="Saint Paul" name="city" required maxLength="40"/>
                    </label>
                    <div className="error">{this.state.cityError}</div>
                    <label>
                        Business
                        <input type="text" placeholder='Business Name' name="business" maxLength="40"/>
                    </label>
                    <label>Item type
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
                    <label>Description
                        <input type="text" placeholder="Color, Size, etc" name="description" maxLength="40"/>
                    </label>
                    <div className="error">{this.state.error}</div>
                    <button type="submit">Search</button>
                </form>
                <div className="searchResults">{results}</div>
            </div>
        )
    }
}
export default Search;