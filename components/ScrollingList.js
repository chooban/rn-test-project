import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class ScrollingList extends React.Component {
  static navigationOptions = {
    title: 'Scrolling List'
  };

  _renderItem({ item }) {
    return <Text style={styles.item}>Key is {item.key}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Dave' },
            { key: 'Dee' },
            { key: 'Dozey' },
            { key: 'Beaky' },
            { key: 'Mick' },
            { key: 'Titch' },
          ]}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 5,
    margin: 5,
    fontSize: 18,
    height: 200
  }
});
