import React from 'react';
import { Text } from 'react-native';
export default class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = this.props.inputContent;
        return (
            <Text style={this.props.inputstyle}>{content}</Text>
        );
    }
}