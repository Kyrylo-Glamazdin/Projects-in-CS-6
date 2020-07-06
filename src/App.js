import React, {Component} from 'react';
import axios from 'axios';
import Form from './Components/Form.js';
import GifList from './Components/GifList.js';
import Header from './Components/Header.js';
import './Styles/General.css';

//the main app component that controls the functionality of the app
class App extends Component{
  constructor(){
    super();

    this.state = {
      gifSearchValue: "", //the search term that user enters to find gifs
      gifSearchResult: [] //result of the api call
    }

    //bindings
    this.loadTrendingGifs = this.loadTrendingGifs.bind(this);
    this.loadSearchResults = this.loadSearchResults.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.loadRandomGif = this.loadRandomGif.bind(this);
  }

  //load trending gifs for a home page
  componentDidMount(){
    this.loadTrendingGifs();
  }

  //loads trending gifs
  loadTrendingGifs(){
    let gifUrl = "http://api.giphy.com/v1/gifs/trending?api_key=HU0h2FPfhI62piIz0ShCr2yLZfHFklXk";
    axios.get(gifUrl)
    .then(res => {
      let gifResult = res.data.data;
      this.setState({
        gifSearchResult: gifResult
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  //modifies the value inside the form
  handleFormChange(event){
    this.setState({
      gifSearchValue: event.target.value
    })
  }

  //called upon the form submission. loads all of the results associated with the entered search term
  loadSearchResults(event){
    event.preventDefault();
    let gifUrl =  "http://api.giphy.com/v1/gifs/search?q=" + this.state.gifSearchValue + "&api_key=HU0h2FPfhI62piIz0ShCr2yLZfHFklXk";
    axios.get(gifUrl)
    .then(res => {
      let gifResult = res.data.data;
      this.setState({
        gifSearchResult: gifResult
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  //loads random gif from giphy
  loadRandomGif(){
    let gifUrl = "http://api.giphy.com/v1/gifs/random?api_key=HU0h2FPfhI62piIz0ShCr2yLZfHFklXk";
    axios.get(gifUrl)
    .then(res => {
      let gifResult = res.data.data;
      let resArray = [];
      resArray.push(gifResult);
      this.setState({
        gifSearchResult: resArray
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <div className="nav-section">
          <div className="nav-item">
            <button className="standard-button" onClick={this.loadTrendingGifs}>Trending</button>
          </div>
          <div className="nav-item">
          <Form handleChange={this.handleFormChange} handleSubmit={this.loadSearchResults}/>
          </div>
          <div className="nav-item">
            <button className="standard-button" onClick={this.loadRandomGif}>Random Gif</button>
          </div>
        </div>
        <div className="gif-container">
          <GifList gifs={this.state.gifSearchResult}/>
        </div>
      </div>
    );
  }
}

export default App;
