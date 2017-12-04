import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import styles from '../components/style';
import { Bar } from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modalbox';

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
    return (
      <KeyboardAvoidingView style={styles.indexContainer} >
        <Bar progress={0.6} width={340} color='#EEEEEE' style={{margin: 10}} borderWidth={0.7} />
          <View style={styles.registerHeader}>
            <Text style={styles.indexText}> Langkah Kedua </Text>
          </View>
          <View style={styles.rowContainer}>
            <TouchableNativeFeedback>
              <View style={styles.roundedView} >
                <Icon name="md-camera" color='#FFFFFF' size={35} />
                <Text style={styles.smallText}> Foto KTP </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.roundedView} >
                <Icon name="md-camera" color='#FFFFFF' size={35} />
                <Text style={styles.smallText}> Foto Diri </Text>
              </View>
            </TouchableNativeFeedback>
          </View>

          <View style={styles.rowContainer}>
            <TouchableNativeFeedback>
              <View style={styles.roundedView} >
                <Icon name="md-camera" color='#FFFFFF' size={35} />
                <Text style={styles.smallText}> Tanda Tangan </Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.roundedView} >
                <Icon name="md-camera" color='#FFFFFF' size={35} />
                <Text style={styles.smallText}> NPWP </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
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