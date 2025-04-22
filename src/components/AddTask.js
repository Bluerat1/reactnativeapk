// src/components/AddTask.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../ThemeContext';
import AntDesign  from '@expo/vector-icons/AntDesign';
import { lightTheme, darkTheme } from '../styles';

export default function AddTask({ onAdd }) {
  const { theme } = useContext(ThemeContext);
  const styles = theme === 'light' ? lightTheme : darkTheme;
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <View style={styles.addTaskContainer}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Add a new task"
        style={styles.addTaskInput}
      />
      <TouchableOpacity onPress={handleAdd}>
        <AntDesign   name="plussquare" size={45} color="orange" />
      </TouchableOpacity>
    </View>
  );
}