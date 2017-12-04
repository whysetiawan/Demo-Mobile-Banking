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
// import { CameraKitCamera } from 'react-native-camera-kit';

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
      norek: '',
      pin: '',
      errorMsg: ''
    }
  }

  componentDidMount(){
    const {data} = this.props.navigation.state.params;
    console.log(data)    
  }

  nextStep(){
    const {data} = this.props.navigation.state.params;
    console.log(data)
    this.props.navigation.setParams({ data: {...data,...this.state}})
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.indexContainer} >
        <Bar progress={1.0} width={340} color='#EEEEEE' style={{margin: 10}} borderWidth={0.7} />
          <View style={styles.registerHeader}>
            <Text style={styles.indexText}> 2. Sedikit Lagi Tentang Anda </Text>
          </View>
          <TextInput
            placeholder='No. Rekening'
            style={styles.registrationTextInput}
            value={this.state.norek}
            onChangeText={(norek) => this.setState({norek})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            keyboardType='numeric'
          />
          <TextInput
            placeholder='Pin Untuk Transaksi'
            style={styles.registrationTextInput}
            value={this.state.pin}
            onChangeText={(pin) => this.setState({pin})}
            underlineColorAndroid='#FFFFF5'
            placeholderTextColor='#FFFFF5'
            keyboardType='numeric'
          />
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