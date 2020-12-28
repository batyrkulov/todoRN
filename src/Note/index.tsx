import * as React from 'react';

import { StyleSheet, View, Text, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NoteEditor from '../NoteEditor';

export interface NoteType {
  text: string;
  read: boolean;
}

interface PropsType {
  note: NoteType;
  removeNote: (index: number) => void;
  editNote: (index: number, text: string) => void;
  readedNote: (index: number) => void;
  archiveNote: (index: number) => void;
  index: number;
}

const Note: React.FC<PropsType> = ({ note, removeNote, index, editNote, readedNote, archiveNote }) => {
  const [showModal, setModal] = React.useState<boolean>(false);

  const onSave = (text: string) => {
    setModal(false);
    editNote(index, text);
  }

  return <View style={styles.note}>
    {showModal && (
      <Modal>
        <NoteEditor text={note.text} onSave={onSave} onCancel={() => setModal(false)} />
      </Modal>
    )}

    <Text style={styles.text}>
      {note.text}
    </Text>
    <View style={styles.buttons}>
      <View style={styles.button}>
        <Icon name='check-circle' size={15} color={note.read ? '#757575' : '#FFC107'} onPress={()=>readedNote(index)} />
      </View>
      <View style={styles.button}>
        <Icon name='edit' size={15} color='#FFC107' onPress={() => setModal(true)} />
      </View>
      <View style={styles.button}>
        <Icon name='archive' size={15} color='#FFC107' onPress={() => archiveNote(index)} />
      </View>
      <View style={styles.button}>
        <Icon name='times-circle' size={15} color='#FFC107' onPress={()=>removeNote(index)} />
      </View>
    </View>
  </View>
};

const styles = StyleSheet.create({
  note: {
    flexDirection: 'row',
    minHeight: 70,
    backgroundColor: '#fff',
    borderBottomColor: '#BDBDBD',
    borderBottomWidth: 1,
    padding: 7
  },

  text: {
    fontSize: 17,
    color: '#212121',
    flex: 2
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },

  button: {
    margin: 7
  }
});

export default Note;

