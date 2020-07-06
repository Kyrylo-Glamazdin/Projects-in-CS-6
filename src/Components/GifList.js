import React, {Component} from 'react';
import GifCard from './GifCard.js';

//the list of all gifs that would be displayed in the app
class GifList extends Component{

    render(){
        return(
            <div className="gif-list">
                {this.props.gifs.map(gif => (<GifCard key={gif.id} gif={gif}/>))}
            </div>
        );
    }
}

export default GifList;