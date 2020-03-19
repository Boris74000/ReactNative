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
    Keyboard, FlatList,
} from 'react-native';

import styles from '../../styles';
import {jobDatings} from '../../app';

export default class DetailsProScreen extends Component {

    navigation = null;
    state = {
        pro:{},
        jobDatings:[],

    }

    constructor(props) {
        super(props);
        this.state.pro = this.props.pro || {};
        this.state.jobDatings = jobDatings;
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1,}}>
                        <View style={{flex: 1,}}>
                            <Text style={styles.titleDetails}>{this.state.pro.name}</Text>
                        </View>
                        <View style={{flex: 11, alignItems: 'center'}}>
                            <Image
                                style={{width: 100, height: 100}}
                                source={{uri: this.state.pro.avatar}}/>
                        </View>
                        <View>
                            <FlatList
                                data={this.state.jobDatings}
                                renderItem={({item}) => (
                                    <View style={{flexDirection: 'row', flex: 2, alignItems: 'center'}}>
                                        <Text style={{flex: 2, fontWeight: 'bold', fontSize: 18}}>{item.title}</Text>
                                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                                            <Text style={{}}>{item.date}</Text>
                                        </View>
                                    </View>
                                    )}
                                    />
                        </View>

                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }


}
