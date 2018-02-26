import React from 'react';
import firebase from 'react-native-firebase';
import {
  Alert,
  Text,
  View,
  Button
} from 'react-native';

import styles from './Styles';

export default class PressMe extends React.Component {
  static navigationOptions = {
    title: 'Press The Button'
  };

  _onPressButton() {
    console.log("Authorising...");
    firebase.auth()
      .signInAnonymouslyAndRetrieveData()
      .then((credentials) => {
        Alert.alert("default app user is " + JSON.stringify(credentials.user.toJSON()));
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

