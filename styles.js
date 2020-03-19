import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    color: '#f15322',
    fontSize: 30,
    marginTop: 30,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'silver',
    // borderRadius: 10,
  },
  validButton: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#f15322',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
  listItem: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    borderColor: '#f15322',
    borderWidth: 1,
    minHeight: 100,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleDetails: {
    backgroundColor: '#e8744a',
    paddingTop: 10,
    paddingBottom: 60,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});
