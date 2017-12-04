import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight
} from 'react-native';
import styles from '../components/style';
import { Bar } from 'react-native-progress';

export default class Register extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Daftarkan Nasabah',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#446CB3'
    }
  })
  constructor(){
    super();
    this.state = {
      email: '',
      noHp: '',
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView style={styles.indexContainer} >
        <Bar progress={0.3} width={340} color='#EEEEEE' style={{margin: 10}} borderWidth={0.7} />
          <View style={styles.registerHeader}>
            <Text style={styles.indexText}> Langkah Pertama </Text>
          </View>
          <TextInput
            placeholder='Email'
            style={styles.registrationTextInput}
            value={this.state.norek}
            onChangeText={(norek) => this.setState({norek})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
          />
          <TextInput
            placeholder='Nomor HP'
            style={styles.registrationTextInput}
            value={this.state.pin}
            onChangeText={(pin) => this.setState({pin})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            keyboardType='numeric'
          />
          <TouchableOpacity
            style={[styles.indexButton, {marginTop: 10}]}
            onPress={() => navigate('ConsumerRegistration2')}
          >
            <Text style={styles.indexTextButton}> Selanjutnya </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
} 