import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class ViewComponent extends React.Component {
      
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <View style={this.props.inputstyle}>
                {this.props.children}
            </View>
        );
    }
}