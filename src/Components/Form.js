import React, {Component} from 'react';
import '../Styles/General.css';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label className="standard-label"> Gif Search </label>
                <input className="standard-input" type="text" value={this.props.gifSearchValue} onChange={this.props.handleChange}/>
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;