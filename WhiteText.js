/*
Usage: <WhiteText text='some text' />
Optional: brightness='bright' dollarFigure={true, false}
textSize={a nummber} justify='Anything that works with textAlign'
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import PropTypes from 'prop-types';

class WhiteText extends Component {
  render(){
    textStyle = function(options, brightness){
      var textColor;
      var textSize = parseInt(options.textSize, 10);
      if(brightness === 'bright'){
        textColor = '#F9F9F9';
      } else {
        textColor = '#DADBDB';
      }
      var leftMargin = 20;
      if(options.justify == 'right'){
       leftMargin = 0;
      }
      return {
        //flex: 3,
        //alignSelf: 'stretch',
        marginLeft: leftMargin,
        //marginRight: 20,
        textAlign: options.justify,
        //textAlignVertical: 'center',
        fontSize: textSize,
        color: textColor,
        //alignItems: 'center',
        //flexWrap: 'nowrap',
      }
    }

    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    var text = this.props.text;
    switch (this.props.dollarFigure) {
      case true:
        if(parseFloat(this.props.text)){
          text = parseFloat(this.props.text);
          text = numberWithCommas(text);
          text = '$' + text;
          break;
        }
        else {
          //should figure out how to throw an error here
          break;
        }
        break;
      default:
        break;
    }
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}/>
        <View style={{
                      flex: 3,
                      justifyContent: 'center',
                      alignItems: this.props.justify === 'right' || 'left' ? 'flex-start' : 'center',

        }}>
          <Text style={textStyle(this.props, this.props.brightness)}>{text}</Text>
        </View>
        <View style={styles.placeholder}/>
      </View>
    );
  }
}

WhiteText.propTypes = {
  dollarFigure: PropTypes.bool,
  textSize: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',

  },
  placeholder:{
  }
});

export default WhiteText;
