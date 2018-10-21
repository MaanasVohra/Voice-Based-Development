import React from 'react';
import { Image } from 'react-native';

export default class ImageComponent extends React.Component {
    render() {
        let pic = {
            uri: this.props.imageUrl
        };

        return (
            <Image source={pic} style={this.props.inputstyle}>
            
            </Image>
        );
    }
}