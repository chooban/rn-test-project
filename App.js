import React from 'react';
import {
  StackNavigator
} from 'react-navigation';
import {
  Text,
  View
} from 'react-native';

import Home from './components/Home';
import PressMe from './components/PressMe';
import ScrollingList from './components/ScrollingList';
import NotificationsWatcher from './components/NotificationsWatcher';

const App = StackNavigator({
  HomeScreen: {
    screen: Home
  },
  PressMeScreen: {
    screen: PressMe
  },
  ScrollingListScreen: {
    screen: ScrollingList
  },
  NotificationsScreen: {
    screen: NotificationsWatcher
  }
}, {
  initialRouteName: 'PressMeScreen'
});

export default App;
