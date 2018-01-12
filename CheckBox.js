
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';

class CheckBox extends Component {

  static propTypes = {
    checked: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
  }

  static defaultProps = {
    checked: false,
    onPress: this._toggleCheck
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  _toggleCheck = function() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render () {
    console.log(this.props.checked);
    console.log(this.state.checked);

    return (
      <TouchableOpacity style={this.props.checked ? styles.buttonChecked : styles.buttonUnchecked} 
                        onPress={this.props.onPress}/>
    );
  }
}


const styles = StyleSheet.create ({

  buttonUnchecked: {

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'darkgrey',
      //border: 'none',
    //  color: 'red',
      //textAlign: 'center',
      //fontSize: 112,
  },

  buttonChecked: {
    flex: 1,
    backgroundColor: '#4DE5CE',

  },



});

export default CheckBox
