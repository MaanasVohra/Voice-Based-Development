import React from 'react';

export default class ImageComponent extends React.Component {
    render() {
        return (
            <img 
                src={this.props.imagelink} 
                alt="" 
                height="420" 
                width="420" 
            />
        )
    };
}
