import React from 'react';
import firebase from 'react-native-firebase';
import {
  Text,
  View
} from 'react-native';

import styles from './Styles';

export default class NotificationsWatcher extends React.Component {
  static navigationOptions = {
    title: 'Notifications'
  };

  constructor(props) {
    super(props);
    this.state = {
      messageCount: 0
    };
  }

  componentDidMount() {
    const FCM = firebase.messaging();

    FCM.subscribeToTopic('/topics/broadcast');
    FCM.onMessage((message) => {
      console.log("Got a message: " + message);
      this.setState({
        messageCount: this.state.messageCount + 1
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Received {this.state.messageCount} notifications</Text>
      </View>
    );
  }
};
