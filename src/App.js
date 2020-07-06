import React, {Component} from 'react';
import axios from 'axios';
import Form from './Components/Form.js';
import GifList from './Components/GifList.js';
import Header from './Components/Header.js';

class App extends Component{
  constructor(){
    super();

    this.state = {
      gifSearchValue: "",
      gifSearchResult: []
    }

    this.loadTrendingGifs = this.loadTrendingGifs.bind(this);
    this.loadSearchResults = this.loadSearchResults.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.loadRandomGif = this.loadRandomGif.bind(this);
  }

  componentDidMount(){
    this.loadTrendingGifs();
  }

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

  handleFormChange(event){
    this.setState({
      gifSearchValue: event.target.value
    })
  }

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
        <button onClick={this.loadTrendingGifs}>Trending</button>
        <Form handleChange={this.handleFormChange} handleSubmit={this.loadSearchResults}/>
        <button onClick={this.loadRandomGif}>Random Gif</button>
        <GifList gifs={this.state.gifSearchResult}/>
      </div>
    );
  }
}

export default App;
