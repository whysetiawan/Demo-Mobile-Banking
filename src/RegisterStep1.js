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
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

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
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      errorMsg: 'Isi kolom dengan benar'
    }
  }

  componentDidMount(){
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount(){
    MessageBarManager.unregisterMessageBar();
  }

  nextStep(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const Msg = {
      title: 'Error',
      message: this.state.errorMsg,
      alertType: 'error'
    }
    const { name, email, password, phoneNumber, errorMsg } = this.state;
    const data = this.state;
    this.props.navigation.navigate('Register2', {data})

    if( name == '' ){
      this.setState({errorMsg: 'Tolong isi nama anda dengan benar' }, () => {
        MessageBarManager.showAlert(Msg)
      })
    }    
    else if( phoneNumber.length <11 ){
      this.setState({errorMsg: 'Nomor HP harus lebih dari 11 digit angka' }, () => {
        MessageBarManager.showAlert(Msg)
      })      
    }
    else if ( !re.test(email)){
      this.setState({errorMsg: 'Email tidak valid' }, () => {
        MessageBarManager.showAlert(Msg)
      })      
    }
    else if( password.length <6 ){
      this.setState({errorMsg: 'Password harus lebih dari 6 karakter' }, () => {
        MessageBarManager.showAlert(Msg)
      })
    }
    else{
      const data = this.state;
      this.props.navigation.navigate('Register2', {data})
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.indexContainer} >
        <Bar progress={0.5} width={340} color='#ffffff' style={{margin: 10}} borderWidth={0.7} borderColor='#EEEEEE' />
          <View style={styles.registerHeader}>
          <Text style={styles.indexText}> 1. Identitas Anda </Text>
          </View>
          <TextInput
            placeholder='Nama'
            style={styles.registrationTextInput}
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
          />
          <TextInput
            placeholder='Nomor HP'
            style={styles.registrationTextInput}
            value={this.state.phoneNumber}
            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            keyboardType='numeric'
          />
          <TextInput
            placeholder='Email'
            style={styles.registrationTextInput}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
          />
          <TextInput
            placeholder='Password'
            style={styles.registrationTextInput}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.indexButton, {marginTop: 10}]}
            onPress={this.nextStep.bind(this)}
          >
            <Text style={styles.indexTextButton}> Selanjutnya </Text>
          </TouchableOpacity>
          <MessageBar ref="alert" />
        </KeyboardAvoidingView>
    );
  }
}