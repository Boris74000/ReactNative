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
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList
} from 'react-native';


import {jobDatings} from '../../app';
import styles from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FAB from 'react-native-fab';

export default class ListJobDatingsScreen extends Component {
  state = {
    listJobDatings: [],
  };
  constructor(props) {
    super(props);
    this.state.listJobDatings = jobDatings;
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              data={this.state.listJobDatings}
              renderItem={({item}) => (
                <TouchableOpacity
                  key={'jobDating_'+item.id}
                  style={styles.listItem}
                  onPress={() => {
                    this.props.navigation.push('DetailsJobDating', {jobDating : item})
                  }}>
                  <View style={{flexDirection: 'row', flex: 2, alignItems: 'center'}}>
                    <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18}}>{item.title}</Text>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                      <Text style={{}}>{item.date}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                    <Text style={{flex: 3}}>{item.place}</Text>
                    <View
                      style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Icon name="user-ninja" size={15}/>
                      <Text style={{fontWeight: 'bold', fontSize: 15, color: '#f15322'}}>{item.students.length}</Text>
                      <Icon name="user-tie" size={15}/>
                      <Text style={{fontWeight: 'bold', fontSize: 15, color: '#f15322'}}>{item.pro.length}</Text>
                      <Icon name="calendar-alt" size={15}/>
                      <Text style={{fontWeight: 'bold', fontSize: 15, color: '#f15322'}}>{item.dates.length}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
            <FAB buttonColor="#f15322" iconTextColor="#FFF" onClickAction={() => {
              this.props.navigation.navigate('NewJobDating')
            }} visible={true} iconTextComponent={<Icon name="plus"/>}/>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
