import React,  {Component} from 'react';
import NavBar from './NavBar';
import HeroText from './HeroText';
import Button from './Button';

class MainSection extends Component {
    render() {
        return (
            <section className="main">
                <NavBar/>
                <HeroText heroText={this.props.heroText}/>
                <Button>{this.props.heroText.callToAction}</Button>
            </section>
        );
    }
}



export default MainSection;
