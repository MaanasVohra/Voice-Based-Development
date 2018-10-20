import React from 'react';
import ReactDOM from 'react-dom';
import DivComponent from './Components/ViewComponent'
import TextComponent from './Components/TextComponent'
import ImageComponent from './Components/ImageComponent'
import ButtonComponent from './Components/ButtonComponent'
import ListComponent from './Components/ListComponent'
import ListItemComponent from './Components/ListItemComponent';
import Data from './datastructure'

const a = "Hi";
const b = ["Hello","Austin"];

const inputstyle = {
    fontSize : '40px',
};

class App extends React.Component{
    render() {
        return (
            <ListComponent>
                {this.props.children}
            </ListComponent>
        )
    }
}

ReactDOM.render(
    <App imagelink="http://cdn.dota2.com/apps/dota2/images/blogfiles/fall_treasure2018_plus.png" inputstyle={inputstyle} data="Hello">
        {a}
    </App>,document.getElementById('root')
);