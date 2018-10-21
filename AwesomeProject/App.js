import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button, ScrollView } from 'react-native';

class GreetComponent extends React.Component {
  render() {
    return (
      <Text>Hey there, {this.props.name}</Text>
    );
  }
}

function BasicCentredTexts(props) {
  let pic = {
    uri: 'data:image/jpeg;base64,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'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigredtext}>This is my first fucking app</Text>
      <Image source={pic} style={{ width: 193, height: 110 }} />
      <Text>This is a weird doggo</Text>

      <GreetComponent name="Austin" />
      <GreetComponent name="Praful" />
      <GreetComponent name="Gharat Bhau" />
    </View>
  );
}

function BasicFlexBoxPractice(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}></View>
    </View>
  );
}

// generates a greeting for the person!
class BasicTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : ''};   
  }

  render() {
    return (
      <View>
        <TextInput
        placeholder="Enter your name"
        onChangeText={(text) => this.setState({name: text})}/> 
        <Text>Hey there, {this.state.name}</Text>
      </View>
    );
  }
}

class BasicButtonFunctionality extends React.Component {
  onPressButton() {
    Alert.alert("You fucking son of a bitch");
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button onPress={this.onPressButton} title="Press me" style={{margin: 20, alignItems: 'stretch'}} />
      </View>
    );
  }
}

class ScrollViewPractice extends React.Component {
  render() {
    return (
      <ScrollView>
        
      </ScrollView>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: "https://i.kym-cdn.com/photos/images/newsfeed/001/244/993/13d.png"
    };

    return (
      <View style={styles.container}>
        <BasicButtonFunctionality />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bigredtext: {
    fontSize: 30,
    color: 'red'
  }
});
