import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return <View style={styles.header}>
    <Text style={styles.headerText}>
      Todo app
    </Text>
  </View>
};

const styles = StyleSheet.create({
  header: {
    height: '10%',
    backgroundColor: '#00796B',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  }
});

