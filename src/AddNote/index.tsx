import * as React from 'react';

import { StyleSheet, Modal, View, Text } from 'react-native';
import NoteEditor from '../NoteEditor';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  addNote: (text: string) => void;
  onArchivePress: () => void;
}

const AddNote: React.FC<PropsType> = ({ addNote, onArchivePress }) => {
  const [showModal, toggleModal] = React.useState<boolean>(false);

  const onSave = (text: string) => {
    toggleModal(false);
    addNote(text);
  }

  return <View style={styles.add}>
    <Text style={styles.text} onPress={() => toggleModal(!showModal)}>
      Add Note
    </Text>
    <Icon style={styles.arch} name='archive' size={40} color='#FFC107' onPress={() => {onArchivePress()}} />
    {showModal && (
      <Modal>
        <NoteEditor onSave={onSave} onCancel={() => { toggleModal(false) }} />
      </Modal>
    )}
  </View>
};

const styles = StyleSheet.create({
  add: {
    minHeight: '10%',
    backgroundColor: '#00796B',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#FFC107',
    padding: 9,
    borderRadius: 4
  },

  arch: {
    
  }
});

export default AddNote;

