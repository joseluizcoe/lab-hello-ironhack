import React, {Component} from 'react';

class HeroText extends Component {
    render(){
        return (
            <div className="heroText">
                <h1>{this.props.heroText.title}</h1>
                <p>{this.props.heroText.text}</p>
            </div>
        );
    }
}

export default HeroText;
