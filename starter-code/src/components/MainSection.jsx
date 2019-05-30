import React,  {Component} from 'react';
import NavBar from './NavBar';
import HeroText from './HeroText';
import Button from './Button';

class MainSection extends Component {
    render() {
        return (
            <section className="main">
                <NavBar/>
                <HeroText/>
                <Button>Awesome!</Button>
            </section>
        );
    }
}

export default MainSection;
