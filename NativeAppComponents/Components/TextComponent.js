import React from 'react';
import { Text } from 'react-native';

export default class TextComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Text style={this.props.inputstyle}>
                {this.props.children}
            </Text>
        );
    }
}