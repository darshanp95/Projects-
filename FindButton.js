import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import PropTypes from 'prop-types';

class FindButton extends Component {
    static PropTypes = {
        onPress: PropTypes.func,
        fontSize: PropTypes.number,
        borderRadius: PropTypes.number

    }

    static defaultProps = {
        fontSize: 22,
        onPress: () => {Alert.alert('you pressed a button')}
      }

      findButtonStyle(options){
        return {
          flex: 1,
          flexDirection: 'row',
          backgroundColor:'#fff468',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: options
        }
      }

      textStyle(options){
        return{
          flex: 1,
          alignSelf: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          color:'#708090',
          marginLeft: 20,
          marginRight: 20,
          fontSize: options
        }
      }
   

    render(){
        return(
            <TouchableOpacity style={this.findButtonStyle(this.props.borderRadius)} onPress={this.props.onPress}>
                <Text fontSize={this.props.fontSize} style={this.textStyle(this.props.fontSize)}>{this.props.text}</Text>
            </TouchableOpacity>


        )

    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff468',




    },
    buttonText: {
        textAlign: 'center',
        color: '#708090',
        fontWeight: 'bold',
    }

});

export default FindButton;