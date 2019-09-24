import React, {Component} from 'react';
import{Route, BrowserRouter} from 'react-router-dom';
import NavBar from "./navbar";
import Welcome from './welcome';
import Post from './addItem';
import Search from './search';
import About from './about';
import dummyStore from './dummyStore'
import './App.css';

class  App extends Component {
  state ={
    allItems: dummyStore,
    results: []
  }
  postItem = item => {
    this.setState({
      alltItems: this.state.allItems.concat(item)})
  }
  searchQuery = query =>{
    this.setState({
      results: []
    })
    console.log(query)
    const newResults = this.state.allItems.filter(x=> x.city.toLowerCase().includes(query.city) &&
     x.itemType.toLocaleLowerCase().includes(query.itemType)&&
     x.business.toLocaleLowerCase().includes(query.business)&&
     (x.description.some(y => query.description.includes(y))===true || query.description[0] === "")
     )
     
      this.setState({
        results: newResults
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
                results = {this.state.results}
              />
            }
          />
          <Route
            path ='/about'
            render = { () =>
              <About/>
            }
          />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
