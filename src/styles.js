// src/styles.js
import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center', // Center text horizontally
    marginTop: 10,
    width: '100%'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,

  },
  toggle:{

    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addTaskInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 3,
    marginLeft: 10,
    color: '#000',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },
  filterButtonActive: {
    backgroundColor: 'blue',
  },
  filterText: {
    color: '#fff',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    color: '#000',
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggle:{

    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Center text horizontally
    marginTop: 10,
    width: '100%'
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addTaskInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    marginRight: 3,
    marginLeft: 10,
    color: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'gray',
  },
  filterButtonActive: {
    backgroundColor: 'blue',
  },
  filterText: {
    color: '#fff',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  taskTitle: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  },
  taskInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#555',
    padding: 5,
    color: '#fff',
  },
});