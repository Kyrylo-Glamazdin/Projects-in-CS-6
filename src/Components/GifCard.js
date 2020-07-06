import React from 'react';

//functional component for the individual gif card. loads the gif passed as props
function GifCard(props){

    return(
        <div className="individual-gif">
            <img src={props.gif.images.downsized_medium.url} alt={props.gif.title} />
        </div>
    );
}

export default GifCard;