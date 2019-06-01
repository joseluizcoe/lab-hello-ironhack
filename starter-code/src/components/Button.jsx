import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <div>
            {
                (this.props.children)
                ? (<button className="sadasdas">
                        {this.props.children}
                    </button>
                    )
                : ''
            }
            </div>
        )
    }
}

export default Button;
