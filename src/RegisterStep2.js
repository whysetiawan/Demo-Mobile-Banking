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
import { CameraKitCamera } from 'react-native-camera-kit';

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
        <Bar progress={0.6} width={340} color='#EEEEEE' style={{margin: 10}} borderWidth={0.7} />
          <View style={styles.registerHeader}>
            <Text style={styles.indexText}> 2. Identitas Anda </Text>
          </View>
            <View style={styles.rowContainer}>
            <CameraKitCamera
            ref={cam => this.camera = cam}
            style={{
              flex: 1,
              backgroundColor: 'white'
            }}
            cameraOptions={{
              flashMode: 'auto',             // on/off/auto(default)
              focusMode: 'on',               // off/on(default)
              zoomMode: 'on',                // off/on(default)
              ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
              ratioOverlayColor: '#00000077' // optional
            }}
            onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
            
          />
            </View>
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