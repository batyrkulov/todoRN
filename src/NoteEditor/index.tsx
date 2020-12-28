import * as React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  text?: string;
  onSave: (text: string) => void;
  onCancel: () => void;
}

const NoteEditor: React.FC<PropsType> = ({ text = '', onSave, onCancel }) => {
  const [value, setValue] = React.useState<string>(text)

  return <View style={styles.editor}>
    <View style={styles.window}>
      <Text style={styles.text} onPress={() => onCancel()}>
        Note
      </Text>

      <View style={styles.inp}>
        <TextInput
          autoFocus
          multiline
          numberOfLines={4}
          onChangeText={text => setValue(text)}
          value={value}
        />
      </View>

      <View style={styles.buttons}>
        <Icon name='times-circle' size={40} color='#FFC107' onPress={() => onCancel()} />
        <Icon name='check-circle' size={40} color='#FFC107' onPress={() => onSave(value)} />
      </View>
    </View>
  </View>
};

const styles = StyleSheet.create({
  editor: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B2DFDB',
  },

  window: {
    minHeight: '70%',
    minWidth: '90%',
    backgroundColor: '#fff',
    padding: 10
  },

  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#FFC107',
    padding: 9,
    borderRadius: 4,
    height: 55,
    textAlign: 'center'
  },

  inp: {
    flex: 1,
    borderWidth: 1,
    marginTop: 9,
    marginBottom: 9,
    padding: 10
  },

  buttons: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default NoteEditor;
