import React, {Component} from 'react';

class Item extends Component {
    render() {
        const {imgSrc, title, description} = this.props.item;
        return (
            <div className="item">
                <img src={imgSrc} />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default Item;
