import React from 'react';
import Items from './components/Items';
import MainSection from './components/MainSection';
import './App.css';

class App extends React.Component {

    render() {
        const { items, heroText } = this.props;
        return (
            <div className="App">
                <MainSection heroText={heroText}/>
                <Items items={items}/>
            </div>
        );
    }
}

export default App;
