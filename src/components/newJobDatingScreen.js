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

export default class NewJobDatingScreen extends Component {
    state = {
        title: '',
        place: '',
        date: '',

    };
    navigation = null;

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
                            alignItems: 'center',
                            textTransform: 'uppercase',
                        }}>
                        <Text>Ajouter un nouveau JobDating</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <Text style={styles.label}>Nom du JobDating</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={title => this.setState({title})}
                            value={this.state.title}
                        />
                        <Text style={styles.label}>Lieu du JobDating</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={place => this.setState({place})}
                            value={this.state.place}
                        />
                        <Text style={styles.label}>Date du JobDating</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={Date => this.setState({Date})}
                            value={this.state.Date}
                        />
                    </View>
                    <View
                        style={{
                            flex: 0,
                            height: 80,
                        }}>
                        <TouchableOpacity
                            style={styles.validButton}
                            onPress={this.navigation.goBack}>
                            <Text style={[styles.label, styles.textButton]}>
                                Ajouter
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        );
    }

}
