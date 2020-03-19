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
  FlatList,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles';

const {height} = Dimensions.get('window')

export default class DetailsJobDatingScreen extends Component {
  state = {
    jobDating: {},
  };
  navigation = null;

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state.jobDating = this.props.route.params.jobDating || {};
  }

  getStudentNextDate(userId) {
    let nextTime = null, pro:{}
    for(var i in this.state.jobDating.dates) {
      let d = this.state.jobDating.dates[i] ;
      if(d.studentId === userId) {
        let dateTime = new Date(this.state.jobDating.date+'T'+d.time+':00') ;
        if(nextTime == null || nextTime > dateTime) {
          nextTime = dateTime ;
          pro = this.getPro(d.proId);
        }
      }
    }
    return {nextTime, pro:pro ||{}};
  }

  getProNextDate(userId) {
    let nextTime = null, student:{}
    for(var i in this.state.jobDating.dates) {
      let d = this.state.jobDating.dates[i] ;
      if(d.proId === userId) {
        let dateTime = new Date(this.state.jobDating.date+'T'+d.time+':00') ;
        if(nextTime == null || nextTime > dateTime) {
          nextTime = dateTime ;
          student = this.getStudent(d.studentId);
        }
      }
    }
    return {nextTime, student};
  }

  getStudent(userId) {
    return this.state.jobDating.students.find(s => s.id === userId)
  }

  getPro(userId) {
    return this.state.jobDating.pro.find(s => s.id === userId)
  }

  formatDateTime(date) {
    let d = date.getDate(),
      m = date.getMonth()+1,
      Y = date.getFullYear(),
      h = date.getHours(),
      i = date.getMinutes()
    ;
    return (d<10 ? ('0'+d) : d)+'/'+(m<10 ? ('0'+m) : m)+'/'+Y+' '+(h<10 ? ('0'+h) : h)+':'+(i<10 ? ('0'+i) : i)
  }

  formatDate(date) {
    let d = date.getDate(),
      m = date.getMonth()+1,
      Y = date.getFullYear(),
      h = date.getHours(),
      i = date.getMinutes()
    ;
    return (d<10 ? ('0'+d) : d)+'/'+(m<10 ? ('0'+m) : m)+'/'+Y
  }

  formatTime(date) {
    let h = date.getHours(),
      i = date.getMinutes()
    ;
    return (h<10 ? ('0'+h) : h)+':'+(i<10 ? ('0'+i) : i)
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 1, borderBottomWidth: 1, borderBottomColor: '#f15322'}}>
              <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>{this.state.jobDating.title}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}><Text>{this.state.jobDating.place}</Text></View>
                <View style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}><Text>{this.formatDate(new Date(this.state.jobDating.date+'T12:00:00'))}</Text></View>
              </View>
            </View>
            <View style={{flex: 3, maxHeight:(((height-50)/4)*3)}}>
              <View
                style={{flex: 0, height: 50, flexDirection: 'row', borderBottomColor: '#f15322', borderBottomWidth: 1}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: !this.props.route.params.vue || this.props.route.params?.vue == 'student' ? 'rgba(240, 83, 36, .6)' : 'rgba(240, 83, 36, .2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightColor: '#f15322',
                    borderRightWidth: 1,
                  }}
                  onPress={() => (this.props.navigation.setParams({vue: 'student'}))
                  }>
                  <Text>Étudiants</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: (this.props.route.params?.vue == 'pro' ? 'rgba(240, 83, 36, .6)' : 'rgba(240, 83, 36, .2)'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightColor: '#f15322',
                    borderRightWidth: 1,
                  }}
                  onPress={() => (this.props.navigation.setParams({vue: 'pro'}))
                  }>
                  <Text>Professionnels</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: (this.props.route.params?.vue == 'date' ? 'rgba(240, 83, 36, .6)' : 'rgba(240, 83, 36, .2)'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => (this.props.navigation.setParams({vue: 'date'}))
                  }>
                  <Text>Rendez-vous</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                {
                  (this.props.route.params.vue === 'pro') ? (
                    <FlatList
                      data={this.state.jobDating.pro}
                      style={{flex:1}}
                      renderItem={({item, index}) => {
                        const {nextTime, student} = this.getProNextDate(item.id)
                        return (
                        <TouchableOpacity
                          key={'pro_'+item.id}
                          style={{flex: 1, flexDirection: 'row', borderTopColor:'#f15322', borderTopWidth:index ? 1:0, marginTop:index ? 15:0}}
                          onPress={()=>this.props.navigation.navigate('DetailPro', {...item})}>
                          <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                            <Image source={{uri: item.avatar}} style={styles.avatar} resizeMode={'contain'}/>
                          </View>
                          <View style={{flex: 3, flexDirection: 'column'}}>
                            <View style={{flex:1}}><Text style={[styles.title, {marginTop:10}]}>{item.name}</Text></View>
                            <View style={{flex:2, flexDirection:'row'}}>
                              <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center',flex:3}}>
                                <Text style={{ marginRight:10 }}>RDV avec <Text style={{ fontWeight:'bold'}}>{student.name}</Text></Text>
                                <Icon name={'clock'} size={15} />
                                <Text style={{marginLeft:10}}>{this.formatTime(nextTime)}</Text>
                              </View>
                              <View style={{justifyContent:'flex-end', alignItems:'center', flex:1}}>
                                <Image source={{uri:student.avatar}} style={styles.avatar} resizeMode={'contain'} />
                              </View>
                            </View>
                          </View>

                        </TouchableOpacity>
                      )}}
                    />
                  ) : (
                    (this.props.route.params.vue === 'date') ? (
                      <FlatList
                        data={this.state.jobDating.dates}
                        keyExtractor={item=> 'date_'+item.studentId+'_'+item.proId}
                        renderItem={({item, index}) => {
                          let student = this.getStudent(item.studentId),
                            pro = this.getPro(item.proId) ;

                          return (
                          <TouchableOpacity
                            style={{flexDirection:'row', borderTopColor:'#f15322', borderTopWidth:index ? 1:0, paddingVertical:10}}
                            onPress={()=>this.props.navigation.navigate('DetailDate', {...item})}>
                          <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                                <Image source={{uri: student.avatar}} style={styles.avatar}/>
                                <Text style={{fontWeight:'bold'}}>{student.name}</Text>
                            </View>
                            <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                              <Text style={[styles.title, {marginTop:0}]}>{item.time}</Text>
                            </View>
                            <View style={{flex: 2, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold'}}>{pro.name}</Text>
                                <Image source={{uri: pro.avatar}} style={styles.avatar}/>
                            </View>
                          </TouchableOpacity>
                        )}}
                      />
                    ) : (
                      <FlatList
                        data={this.state.jobDating.students}
                        style={{}}
                        renderItem={({item, index}) => {
                          const {nextTime, pro} = this.getStudentNextDate(item.id)
                          return (
                          <TouchableOpacity
                            key={'student_'+item.id}
                            style={{flex: 1, flexDirection: 'row', borderTopColor:'#f15322', borderTopWidth:index ? 1:0, marginTop:index ? 15:0}}
                            onPress={()=>this.props.navigation.navigate('DetailStudent', {...item})}>
                            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                              <Image source={{uri: item.avatar}} style={styles.avatar} resizeMode={'contain'}/>
                            </View>
                            <View style={{flex: 3, flexDirection: 'column'}}>
                              <View style={{flex:1}}><Text style={[styles.title, {marginTop:10}]}>{item.name}</Text></View>
                              <View style={{flex:2, flexDirection:'row'}}>
                                <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center',flex:3}}>
                                  <Text style={{ marginRight:10 }}>RDV avec <Text style={{ fontWeight:'bold'}}>{pro.name}</Text></Text>
                                  <Icon name={'clock'} size={15} />
                                  <Text style={{marginLeft:10}}>{this.formatTime(nextTime)}</Text>
                                </View>
                                <View style={{justifyContent:'flex-end', alignItems:'center', flex:1}}>
                                  <Image source={{uri:pro.avatar}} style={styles.avatar} resizeMode={'contain'} />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}}
                      />
                    )
                  )
                }
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
