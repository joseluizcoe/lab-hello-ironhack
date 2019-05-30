import React, {Component} from 'react';
import Item from './Item';

class Items extends Component {

    render() {
        const { items } = this.props;
        return (
            <div className="itemsContainer">
                {
                    items.map( (item, index) => <Item key={index} item={item} />)
                }
            </div>
        )
    }
}

export default Items;
