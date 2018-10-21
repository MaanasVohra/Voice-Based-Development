import React from 'react';
// import JsxParser from 'react-jsx-parser';

import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

import ImageComponent from './Components/ImageComponent';
import ContentComponent from './Components/ContentComponent';
import TextComponent from './Components/TextComponent';
import ViewComponent from './Components/ViewComponent';
import ListComponent from './Components/ListComponent';
import ListItemComponent from './Components/ListItemComponent';
import ButtonComponent from './Components/ButtonComponent';

import { Button } from 'react-native';

import { observable } from 'mobx';
import { observer } from 'mobx-react';

import 'es6-symbol/implement';
let messageServer = require('./NativeServer/message');

@observer class App extends React.Component {

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.message = messageServer.messages[0];
    this.state = { checker: 0 };
    this.printData = this.printData.bind(this);
  }
  @observable message;

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  getComponents(inputString) {
    var temp = inputString;
    var firstIndex = temp.indexOf(">");
    var lastIndex = temp.lastIndexOf("<");
    var inner = temp.substring(firstIndex + 1, lastIndex);
    console.log(inner);

    let array = [];

    const regex = /[<].*?[>]/gm;
    let m;
    let flag = 1;
    while ((m = regex.exec(inner)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        const temp = match;
        if (flag % 2 == 1) {

          if (temp.indexOf('Content') != -1 && temp.indexOf('inputContent') != -1) {
            const temps = temp.indexOf('{'), tempe = temp.lastIndexOf('}');
            const content = temp.substring(temps + 1, tempe);
            contentInput(content);
          }
          else if (temp.indexOf('Content') != -1 && temp.indexOf('inputContent') == -1) {
            content();
          }
          else if (temp.indexOf('ViewComponent') != -1) {
            view();
          }
        }
        flag++;
        if (match)
          console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    }

    // function contentInput(cont) {
    //   array.push(<ContentComponent key={flag} content={cont} />);
    // }
    // function content() {
    //   array.push(<ContentComponent key={flag} />);
    // }
    // function view() {
    //   array.push(<ViewComponent key={flag}></ViewComponent>);
    // }

    function contentInput(cont) {
      array.push(<View key={flag}><Text>{cont}</Text></View>);
    }
    function content() {
      array.push(<View key={flag}><Text></Text></View>);
    }
    function view() {
      array.push(<View key={flag}></View>);
    }
    newObj = {};
    newObj.components = array;
    return newObj;
  }

  tick() {
    this.setState({
      checker: this.state.checker + 1
    });
    fetch('http://192.168.43.161:3000/getMessage', {
      method: "GET",
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response;
      })
      .then((response) => {
        response = response.text();
        return response;
      })
      .then((response) => {
        newArray = this.getComponents(response);
        return newArray;
      })
      .then((response) => {
        this.message = response;
      })
      .catch((error) => {
        console.log(error);
        this.message = error;
      });
    this.setState({
      checker: this.state.checker + 1
    });
  }

  printData() {
    let string = JSON.stringify(this.message.components);
    return string.length;
  }

  render() {
    return (
      <View>
        <Text>Testing Phase 1</Text>
        <Text>First RN App</Text>
        {/* <JsxParser 
        bindings={{foo: 'bar', myEventHandler: () => {console.log("Something will happen, eventually")}}}
        components={{ImageComponent, ContentComponent, ButtonComponent, TextComponent, ViewComponent, ListComponent, ListItemComponent}}
        jsx={this.message}
        /> */}
        {/* <Text>{this.printData()}</Text> */}
        <View>{this.message.components}</View>
      </View>
    );
  }
}

export default App;
