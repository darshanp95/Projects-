
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import GreenTextField from './GreenTextField'
import BoldUnderlineButton from './BoldUnderlineButton'
import StandardLabel from './StandardLabel'
import GreenSolidButton from './GreenSolidButton'

const window = Dimensions.get('window')

 class Login extends Component {

    render () {

      return (

        <Image source={backgroundImage} style={styles.mainContainer}>



          <View style={styles.upperPlaceHolderContainer}>

          </View>

          <Image source={bigLogo} style={styles.bigLogo}></Image>

          <View style={styles.middlePlaceHolderContainer}>

          </View>

          <View style={styles.textFieldContainer}>
            <View style={styles.textFieldSideMargin}>
            </View>

            <GreenTextField placeholder='Email'></GreenTextField>

            <View style={styles.textFieldSideMargin}>
            </View>

          </View>

          <View style={styles.inBetweenTextFieldPlaceHolder}>

          </View>

          <View style={styles.textFieldContainer}>
            <View style={styles.textFieldSideMargin}>
            </View>

            <GreenTextField placeholder='Password'  secure={true}></GreenTextField>
            <View style={styles.textFieldSideMargin}>
            </View>





          </View>

          <View style={styles.belowTextFieldPlaceHolder}>

          </View>

          <View style={styles.upperPlaceHolderContainer}>

          </View>

          <View style={styles.upperPlaceHolderContainer}>

            <StandardLabel text="Don't have an account?"/>
            <BoldUnderlineButton text='Sign Up' onPress={() => {
              this.props.navigation.navigate('SignupEmail')
            }}/>

          </View>

          <View style={styles.belowButtonPlaceHolder}>

          </View>

          <View style={styles.upperPlaceHolderContainer}>

            <GreenSolidButton text='Log In' onPress={ () => {
              this.props.navigation.navigate('Dashboard')
            }} />

          </View>

          <View style={styles.upperPlaceHolderContainer} />



        </Image>


      );

    }
}

//var func =

const backgroundImage = require('./../images/FirstScreenBackground.png')

const bigLogo = require('./../images/HC-big.png')
const bigLogoHeight = window.height * 0.19
const bigLogoWidth = window.height * 0.45

const miniLogo = require('./../images/HC.png')
const miniLogoSide = window.height * 0.04

const styles = StyleSheet.create ({

  mainContainer: {

      flex: 1,

      alignItems: 'center',

      height: window.height,
      width: window.width,


  },

  upperPlaceHolderContainer: {
    flex: 2.9,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },

  bigLogo: {
    //flex: 2,
    resizeMode: 'contain',
    height: bigLogoHeight,
    width: bigLogoWidth,


  },

  miniLogo: {
    flex: 1,
    resizeMode: 'contain',
    height: miniLogoSide,
    width: miniLogoSide,
  },

  textFieldContainer: {
    flex: 2.9,
    flexDirection: 'row',
  },

  textFieldSideMargin: {
    flex: 0.2,
  },

  middlePlaceHolderContainer: {
    flex: 5,
  },

  inBetweenTextFieldPlaceHolder: {
    flex: 0.8,
  },

  belowButtonPlaceHolder: {
    flex: 1.5,
  },








});

export default Login
