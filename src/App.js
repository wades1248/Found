import React, {Component} from 'react';
import{Route, BrowserRouter} from 'react-router-dom';
import NavBar from "./navbar";
import Welcome from './welcome';
import Post from './addItem';
import Search from './search';
import About from './about';
import ItemLookup from './itemLookup'
import config from './config'
import './App.css';


class  App extends Component {
  state ={
    allItems: [],
    results: [],
    lookupResults: null
  }
  postItem = item => {
    fetch(`${config.API_ENDPOINT}/api/items`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok) {
          return res.json().then(error => {
              throw error
          })
      }
      return res.json()
    })
    .then(
      this.setState({
        allItems: this.state.allItems.concat(item)})
    )
  }
  resetResults= () => {
    this.setState({results: []})
  }
  searchQuery = query =>{
    this.resetResults()
    const newResults = this.state.allItems.filter(x=> x.city.toLowerCase().includes(query.city) &&
      x.itemtype.toLocaleLowerCase().includes(query.itemType)&&
      x.business.toLocaleLowerCase().includes(query.business)&&
      (x.description.split(', ').some(y => query.description.includes(y))===true || query.description[0] === "")
     )
     
      this.setState({
        results: newResults
      })
  }
  onLookup = confirmation => {
    const match= this.state.allItems.find(x => x.confirmation=== confirmation)
    if(match === undefined){
      this.setState({lookupResults: 'error'})
    }else{
      this.setState({lookupResults: match})
    }
  }
  onDelete = confirmation => {
    fetch(`${config.API_ENDPOINT}/api/items/${confirmation}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(error => Promise.reject(error))
      }
      
    })
    .then(this.setState({
      allItems: this.state.allItems.filter(x => x.confirmation !== confirmation),
      results: this.state.results.filter(x => x.confirmation !== confirmation)
      }),
      this.clearLookup()
    )
  }
  clearLookup = () => {
    this.setState({lookupResults: null})
  }
  
  componentDidMount(){
    fetch(`${config.API_ENDPOINT}/api/items`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    .then(res => {
      if(!res.ok){
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(res => this.setState({allItems: res}))
    .catch(error => {
      console.error(error)
    })
  }
  render(){
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="App">
          <Route
            exact path='/'
            render = { ()=> 
              <Welcome/>
            }
          />
          <Route 
            path='/post'
            render = { ()=> 
              <Post
                addItem={this.postItem}
              />
            }
          />
          <Route
            path='/search'
            render = { () =>
              <Search
                searchQuery = {this.searchQuery}
                resetResults= {this.resetResults}
                results = {this.state.results}
                onDelete = {this.onDelete}
              />
            }
          />
          <Route
            path ='/about'
            render = { () =>
              <About/>
            }
          />
          <Route
            path ='/lookup'
            render = {()=>
              <ItemLookup
                lookupResults = {this.state.lookupResults}
                onLookup = {this.onLookup}
                onDelete = {this.onDelete}
                clearLookup = {this.clearLookup}
              />
            }
          />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
