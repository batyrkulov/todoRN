import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Notes from '../Notes';
import AddNote from '../AddNote';
import { NoteType } from '../Note'
import Archive from '../Archive'

const Content: React.FC = () => {
  const getStore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('store')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
  }

  const storeData = async (value: object) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('store', jsonValue)
    } catch (e) {
      
    }
  }

  const [notes, setNotes] = React.useState<Array<NoteType>>([]);
  const [archNotes, setArchNotes] = React.useState<Array<string>>([]);
  const [showArchive, setShowArchive] = React.useState<boolean>(false);

  React.useEffect(() => {
    async () => {
      const store = await getStore();
      if (store) {
        setNotes(store.notes)
        setArchNotes(store.archNotes)
      }
    }
  }, []);

  React.useEffect(() => {
    async () => {
      storeData({ notes, archNotes });
    }
  }, [notes, archNotes]);


  const addNote  = (text: string) => {
    setNotes([...notes, { text, read: false }])
  }

  const removeNote = (index: number) => {
    notes.splice(index, 1);
    setNotes([...notes]);
  }

  const editNote = (index: number, text: string) => {
    notes.splice(index, 1, { text, read: false });
    setNotes([...notes]);
  }

  const readedNote = (index: number) => {
    notes[index].read = true;
    setNotes([...notes]);
  }

  const archiveNote = (index: number) => {
    setArchNotes([...archNotes, notes[index].text]);
    notes.splice(index, 1);
    setNotes([...notes]);
  }

  return <View style={styles.content}>
    {showArchive ?
      <Archive archNotes ={archNotes} />
      :
      <Notes
        notes={notes}
        removeNote={removeNote}
        editNote={editNote}
        readedNote={readedNote}
        archiveNote={archiveNote}
      />
    }
    <AddNote addNote={addNote} onArchivePress={() => {setShowArchive(!showArchive)}}/>
  </View>

};

const styles = StyleSheet.create({
  content: {
    height: '90%'
  },
});

export default Content;