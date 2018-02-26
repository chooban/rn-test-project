import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

import {
  StackNavigator
} from 'react-navigation';

import styles from './Styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this._onPressButton = this._onPressButton.bind(this);
  }

  static navigationOptions = {
    title: 'Home'
  };

  _onPressButton() {
    this.props.navigation.navigate('PressMeScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home screen</Text>
        <Button
          onPress={this._onPressButton}
          title="Go to other page"
        />
      </View>
    );
  }
};
