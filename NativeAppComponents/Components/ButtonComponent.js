import React from 'react';
import { Button } from 'react-native';

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onPressExtended() {

    }

    render() {
        const buttonTitle = this.props.buttonTitle;
        const buttonColor = this.props.buttonColor;
        return (
            <Button style={this.props.inputstyle} onPress={this.onPressExtended} title={buttonTitle} color={buttonColor}></Button>
        );
    }
}