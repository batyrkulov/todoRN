import * as React from 'react';

import { StyleSheet, ScrollView, Text } from 'react-native';

interface PropsType {
  archNotes: Array<string>;
}

const Archive: React.FC<PropsType> = ({ archNotes }) => {
  return <ScrollView>
    {(archNotes.length === 0) && <Text style={styles.note}>Archive is empty</Text>}
    {archNotes.map(note =>
      <Text style={styles.note} key={note} >{note}</Text>
    )}
  </ScrollView>
};

const styles = StyleSheet.create({
  note: {
    fontSize: 14,
    color: '#BDBDBD',
    borderBottomWidth: 2,
    borderBottomColor: '#757575',
    padding: 5,
  }
});

export default Archive;

