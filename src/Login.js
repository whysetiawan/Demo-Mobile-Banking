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

const email = 'admin@admin.com'
const password = 'admin'

export default class Register extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title:  'Login',
    headerStyle: {backgroundColor:'#446CB3'},
    headerTintColor: "#FFFFFF",
  })
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      error: false 
    }
  }

  nextStep(){
    // console.log( email, password )
    // const { email, password } = this.state;
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if(!re.test(email)){
    //   this.setState({ errorEmail: true })
    // }
    // // if(phoneNumber.length < 10){
    // //   this.setState({ errorNumber: true })
    // // }
    if( this.state.email !== email && this.state.password !== password ){
      this.props.navigation.navigate('Home')
      this.setState({ error : true })
    }
    else{
      
      this.props.navigation.navigate('Home')
    }
      // const data = { email, phoneNumber }
      // console.log(data)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.centerContainer}>
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
            secureTextEntry
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            {...this.props}
          />
          { this.state.errorNumber ? <Text style={styles.errorMsg}> Format nomor HP salah </Text> : false }
          <Text style={[styles.normalText, { margin:'4%' }]} onPress={() => navigate('Login')}> Lupa Password? </Text>
          <TouchableOpacity
            style={[styles.indexButton, {marginTop: 10}]}
            onPress={this.nextStep.bind(this)}
          >
            <Text style={styles.indexTextButton}> Login </Text>
          </TouchableOpacity>
          { this.state.error ? <Text style={styles.errorMsg} >  Email atau Password anda salah </Text> : null}
      </KeyboardAvoidingView>
    );
  }
}