import React from 'react';

function GifCard(props){

    return(
        <div className="individual-gif">
            <img src={props.gif.images.downsized_medium.url} alt={props.gif.title} />
        </div>
    );
}

export default GifCard;