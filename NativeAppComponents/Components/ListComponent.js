import React from 'react';
import { List } from 'native-base'; 

export default class ListComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <List style={this.props.inputstyle}>
                {this.props.children}
            </List>
        );
    }
}