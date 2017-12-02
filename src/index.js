/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from '../components/style';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'

export default class App extends Component<{}> {
  static navigationOptions = ({ navigations }) => {
    header: null
  }
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={5} />
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{height: '80%'}}
          indicator={this._renderDotIndicator()}
          autoPlayEnable
        >
          <View style={styles.sliderContainer}>
            <Image
              style={{ width:'100%', height:'70%' }}
              source={require('../components/picture/2.jpg')}
            />
            <Text style={styles.indexText} > {lorem} </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              style={{ width:'100%', height:'70%' }}
              source={require('../components/picture/2.jpg')}
            />
            <Text style={styles.indexText} > {lorem} </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              style={{ width:'100%', height:'70%' }}
              source={require('../components/picture/2.jpg')}
            />
            <Text style={styles.indexText} > {lorem} </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              style={{ width:'100%', height:'70%' }}
              source={require('../components/picture/2.jpg')}
            />
            <Text style={styles.indexText} > {lorem} </Text>
          </View>
          <View style={styles.sliderContainer}>
            <Image
              style={{ width:'100%', height:'70%' }}
              source={require('../components/picture/2.jpg')}
            />
            <Text style={styles.indexText} > {lorem} </Text>
          </View>
        </IndicatorViewPager>
          <TouchableOpacity
            style={styles.indexButton}
            onPress={() => navigate('Register')}
          >
            <Text style={styles.indexTextButton}> Daftar Sebagai Agen </Text>
          </TouchableOpacity>
          <Text style={styles.indexText}> Sudah Punya Akun? Masuk Disini </Text>
      </View>
    );
  }
}