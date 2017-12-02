import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import styles from '../components/style';
import { Bar } from 'react-native-progress';

export default class Register extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: 'Daftar',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#446CB3'
    }
  })
  constructor(){
    super();
    this.state = {
      email: '',
      phoneNumber: '',
      errorEmail: false,
      errorNumber: false,
    }
  }

  nextStep(){
    const { email, phoneNumber } = this.state;
    if(email == '' || phoneNumber.length < 10 || phoneNumber == ''){
      this.setState({ errorEmail: true, errorNumber: true })
    }
    // else{
      const data = { email, phoneNumber }
      console.log(data)
      this.props.navigation.navigate('Register2', {data})
    // }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.indexContainer} >
        <Bar progress={0.3} width={340} color='#ffffff' style={{margin: 10}} borderWidth={0.7} borderColor='#EEEEEE' />
          <View style={styles.registerHeader}>
          <Text style={styles.indexText}> 1. Tentang Anda </Text>
          </View>
          <TextInput
            placeholder='Email'
            style={styles.registrationTextInput}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
          />
          { this.state.errorEmail ? <Text style={styles.errorMsg}> Email anda tidak valid </Text> : false }
          <TextInput
            placeholder='Nomor HP'
            style={styles.registrationTextInput}
            value={this.state.phoneNumber}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            keyboardType='phone-pad'
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
          />
          { this.state.errorNumber ? <Text style={styles.errorMsg}> Nomor HP anda tidak valid </Text> : false }
          <TouchableOpacity
            style={[styles.indexButton, {marginTop: 10}]}
            onPress={this.nextStep.bind(this)}
          >
            <Text style={styles.indexTextButton}> Selanjutnya </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}