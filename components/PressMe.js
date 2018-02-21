import React from 'react';
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
    Alert.alert("You pressed it");
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

