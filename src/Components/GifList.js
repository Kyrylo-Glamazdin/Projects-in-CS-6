import React, {Component} from 'react';
import GifCard from './GifCard.js';

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