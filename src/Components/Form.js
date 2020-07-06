import React, {Component} from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.handleSubmit}>
                <label> Gif Search </label>
                <input type="text" value={this.props.gifSearchValue} onChange={this.props.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Form;