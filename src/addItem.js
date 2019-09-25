import React, {Component} from 'react';
import PostConfirm from './postConfrim'
const uuidv1 = require('uuid/v1');

class Post extends Component {
    state = {
        cityError: null,
        businessError: null,
        desError: null,
        active: false,
        activeItem: {}
    }
    validateItem = event => {
        this.setState({
            cityError: null,
            typeError: null,
            businessError: null,
            desError: null

        })
        event.preventDefault()
        const newID = uuidv1()
        const {city, business, itemType, description} = event.target
        const filterDescription = description.value.toLowerCase().split(' ').filter(
            x=> x!== 'a' && x!=='an' && x!== 'the' && x !=='with' && x!=='and')
        const item = {
            confirmation: newID,
            city: city.value,
            business: business.value,
            itemType: itemType.value,
            description: filterDescription
        }
        const testCity = item.city.trim()
        const testBusness = item.business.trim()
        const testDescription = description.value.trim()
        if(testCity.length === 0){
            this.setState({
                cityError: 'Please enter a valid city'})
        }
        else if(testBusness.length === 0){
            this.setState({
                businessError: 'Please enter a valid business'
            })
        }
        else if(item.itemType === '--'){
            this.setState({
                typeError: "Please select an item type"
            })
        }
        else if(testDescription.length === 0){
            this.setState({
                desError: 'Please enter a valid description'
            })
        }
        else{
            this.props.addItem(item)
            this.setState({
                active: true,
                activeItem: item
            })
            event.target.reset()
        }
    }
    onClose= () => {
        this.setState({
            active: false,
            activeItem: {}
        })
    }
    render(){
        function showConfirmation(state, close)  {
            if(state.active === true){
                return(
                    <PostConfirm item={state.activeItem} onClose={close}/>
                )
            }else{
                return null
            }
        }
        return(
            <div className="input" id="input">
                <form onSubmit={this.validateItem}>
                <legend>Post an Item</legend>
                <label>
                    City:
                    <input type="text" placeholder="Saint Paul" name="city" required maxLength="40"/>
                </label>
                <div className="error">{this.state.cityError}</div>
                <label>
                    Business:
                    <input type="text" placeholder='Business Name' name="business" required maxLength="40"/>
                </label>
                <div className="error">{this.state.businessError}</div>
                <label>Item type:
                    <select name="itemType" required>
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
                    <input type="text" name="description" placeholder="Color, Size, etc" required maxLength="40"/>
                </label>
                <div className="error">{this.state.desError}</div>
                <button type="submit">Post</button>
                </form>
                {showConfirmation(this.state, this.onClose)}
            </div>
        )
    }
}
export default Post