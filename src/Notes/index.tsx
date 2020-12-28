import * as React from 'react';

import { StyleSheet, ScrollView, Text } from 'react-native';
import Note, { NoteType } from '../Note';

interface PropsType {
  notes: Array<NoteType>;
  removeNote: (index: number) => void;
  editNote: (index: number, text: string) => void;
  readedNote: (index: number) => void;
  archiveNote: (index: number) => void;
}

const Notes: React.FC<PropsType> = ({ notes, removeNote, editNote, readedNote, archiveNote }) => {
  return <ScrollView>
    {(notes.length === 0) && <Text style={styles.info}>Empty</Text>}
    {notes.map(
      (note, index) =>
        <Note
          key={note.text} note={note} 
          removeNote={removeNote} 
          index={index}
          editNote={editNote}
          readedNote={readedNote}
          archiveNote={archiveNote}
        />
    )}
  </ScrollView>
};

const styles = StyleSheet.create({
  info: {
    fontSize: 30,
    color: '#757575',
    textAlign: 'center'
  }
});

export default Notes;

