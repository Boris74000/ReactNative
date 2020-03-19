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

import styles from '../../styles';

export default class LoginScreen extends Component {
  state = {
    login: '',
    pass: '',
  };

  onSignIn() {
    // if (
    //   !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.login)) {
    //   return alert('unvalid login email');
    // }
    // if (
    //   !/^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])))(?=.{8,})/.test(this.state.pass)) {
    //   return alert('the password must be composed of 8 characters minimum including a lowercase, an uppercase and a number');
    // }
    this.props.navigation.navigate('Loading', {userToken: 'identified'});
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image source={require('../assets/logo.png')} style={{width: '80%', height: '50%'}} resizeMode='contain'/>
              <Text style={styles.title}>Identifiez-vous</Text>
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 50,
              }}>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={styles.label}>Votre email</Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize={'none'}
                  onChangeText={login => this.setState({login})}
                  value={this.state.login}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={pass => this.setState({pass})}
                  value={this.state.pass}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  flex: 0,
                  height: 80,
                }}>
                <TouchableOpacity
                  style={styles.validButton}
                  onPress={this.onSignIn.bind(this)}>
                  <Text style={[styles.label, styles.textButton]}>
                    Identification
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
