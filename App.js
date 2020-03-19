/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './src/components/loginScreen';
import ListJobDatingsScreen from './src/components/listJobDatingsScreen';
import DetailsJobDatingScreen from './src/components/detailsJobDatingScreen';
import NewStudentScreen from './src/components/newStudentScreen';
import MyAccount from './src/components/newStudentScreen';
import NewJobDatingScreen from './src/components/newJobDatingScreen';
import DetailsProScreen from './src/components/detailsProScreen';

function Load({navigation, route}) {
  return (
    <Stack.Navigator
      initialRouteName="JobDatingList"
      mode="card"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#f15322'},
        mode: 'card',
        gestureDirection: 'horizontal',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MyAccount')}
            style={{marginRight: 10, paddingHorizontal: 10}}
          >
            <Icon name="user" color={'white'} size={30}/>
          </TouchableOpacity>
        ),

      }}>
      <Stack.Screen
        name="JobDatingList"
        component={ListJD}
        mode="card"
        options={{
          title: 'JobDatings',
        }}
      />
      <Stack.Screen
        name="MyAccount"
        component={Profile}
        options={{
          // headerStyleInterpolator: forFade,
          title: 'Mon Compte',
          animationTypeForReplace: 'push',
          headerRight: null,
        }}
      />
      <Stack.Screen
        name="DetailsJobDating"
        component={DetailsJobDating}
        mode="card"
        options={{
          // headerStyleInterpolator: forFade,
          title: 'Détails ',
          mode: 'card',
          gestureDirection: 'horizontal',

          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}
      />
      <Stack.Screen
        name="NewStudent"
        component={NewStudent}
        mode="card"
        options={{
          title: 'Nouvel étudiant',
          headerRight: null,
        }}
      />
      <Stack.Screen
        name="NewPro"
        component={NewPro}
        mode="card"
        options={{
          title: 'Nouveau PRO',
          headerRight: null,
        }}
      />
      <Stack.Screen
        name="NewDate"
        component={NewDate}
        mode="card"
        options={{
          title: 'Nouveau RDV',
          headerRight: null,
        }}
      />
      <Stack.Screen
        name="DetailStudent"
        component={DetailStudent}
        mode="card"
        options={{
          title: 'Details étudiant',
        }}
      />
      <Stack.Screen
        name="DetailPro"
        component={DetailPro}
        mode="card"
        options={{
          title: 'Details Pro',
        }}
      />
      <Stack.Screen
        name="DetailDate"
        component={DetailDate}
        mode="card"
        options={{
          title: 'Details RDV',
        }}
      />

      <Stack.Screen
        name="NewJobDating"
        component={NewJobDating}
        options={{
          title: 'New JobDating',
          animationTypeForReplace: 'push',
          headerRight: null,
        }}
      />
    </Stack.Navigator>
  );
}

function NewStudent({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>New Student</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>

  );
}

function NewPro({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>New Pro</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>

  );
}

function NewDate({navigation, route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>New Date</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>

  );
}

function DetailStudent({navigation, route}) {
  navigation.setOptions({title:route.params.name})
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail Student</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>

  );
}

function DetailPro({navigation, route}) {
  navigation.setOptions({title:route.params.name})
  return (
      <DetailsProScreen navigation={navigation} pro={route.params}/>

  );
}

function DetailDate({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Detail Date</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>

  );
}

function ListJD({navigation}) {
  return (
    <ListJobDatingsScreen navigation={navigation}/>
  );
}

function Profile({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
    </View>
  );
}

function DetailsJobDating({navigation, route}) {
  return (
    <DetailsJobDatingScreen navigation={navigation} route={route}/>
  );
}

function NewJobDating({navigation}) {
  return (
      <NewJobDatingScreen navigation={navigation}/>
  );
}

function SignIn({navigation}) {
  return (
    <LoginScreen navigation={navigation}/>
  );
}

function Loading({route}) {
  const {userToken} = route.params || {};
  return (
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="Load"
          component={Load}
          options={{
            headerShown: false,
          }}
        />

      )}
    </Stack.Navigator>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          options={{headerShown: false}}
          component={Loading}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
