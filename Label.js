import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text 
} from 'react-native';

import PropTypes from 'prop-types';

class Label extends Component {
    static PropTypes = {
        textSize: PropTypes.number,
        noLeftMargin: PropTypes.bool
    }

    static defaultProps = {
        justify: 'center',
        noLeftMargin: false
      
      };

    render(){
        styling = function(options) {
            var left = 0;
            if(options.justify == 'left'){
                left = 20;
              }
            if(options.noLeftMargin){
                left = 0;
              }

              var textSize = parseInt(options.textSize, 10);
              return{
                flex: 1,
                textAlign: options.justify,
                textAlignVertical: 'center',
                color: '#fff468',
                fontSize: textSize,
                marginLeft: left,
                backgroundColor: 'rgba(0,0,0,0)'
             }
        }

        function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
          }
      
          var text = this.props.text;
          if (this.props.dollarFigure) {
            text = parseFloat(text);
            text = numberWithCommas(text);
            text = '$' + text;
          }

        return(
            <View style={styles.container}>
              <Text style={styling(this.props)}>{text}</Text>
            </View>
          );

    

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

  export default Label;