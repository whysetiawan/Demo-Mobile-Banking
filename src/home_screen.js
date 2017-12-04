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

const email = 'admin@admin.com'
const password = 'admin'

export default class Register extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.indexContainer}>
      <View style={styles.centerContainer}>
        <Text style={styles.indexTextButton} > Selamat Datang Agen!  </Text>
        <TouchableHighlight
          style={styles.blueButton}
        >
          <Text> Profile Saya </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueButton}
          onPress={() => navigate('ConsumerRegistration')}
        >
          <Text> Registrasi Nasabah </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueButton}
        >
          <Text> Setor Tunai </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueButton}
        >
          <Text> Tarik Tunai </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueButton}
        >
          <Text> Transfer </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueButton}
        >
          <Text> Cara Penggunaan </Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}