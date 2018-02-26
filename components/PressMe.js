import React from 'react';
import firebase from 'react-native-firebase';
import {
  Alert,
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import styles from './Styles';

class PressMe extends React.Component {
  constructor(props) {
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }

  static navigationOptions = {
    title: 'Press The Button'
  };

  _onPressButton() {
    firebase.auth().signInAnonymouslyAndRetrieveData();
    firebase.auth().onAuthStateChanged(() => {
      console.log("Auth state changed");
      this.props.navigation.navigate('NotificationsScreen');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the text wot I wrote chiz chiz</Text>
        <Button
          onPress={this._onPressButton}
          title="Press me"
        />
      </View>
    );
  }
}

export default PressMe;
