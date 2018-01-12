import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

class UnderlineButton extends Component {
    static PropTypes= {
        onPress: PropTypes.func
    }


render(){
    return (


        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        
          <Text style={styles.buttonText}>{this.props.text}</Text>
        
        </TouchableOpacity>


    );
    }


}


const styles = StyleSheet.create ({


    button: {
        
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
             
          },
        
          buttonText: {
            textAlign: 'center',
            color: '#fff468',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
        
        
        
          }

});


export default UnderlineButton