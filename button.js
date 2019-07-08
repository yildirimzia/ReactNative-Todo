import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
}from 'react-native'

export default class MyButton extends React.Component {
  render(){

    return(
      <View style={{backgroundColor:'#fff',flex:1,}}>
        <TouchableOpacity onPress={this.props.onPress} style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:16}}>
            {this.props.Text}
          </Text>
        </TouchableOpacity>
      </View>
    );

  }
}
