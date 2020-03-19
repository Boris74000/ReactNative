/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import styles from '../../styles'

export default class NewStudentScreen extends Component {
  state = {};
  navigation=null;

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
              <Text>New Student</Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
