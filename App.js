import React, {Component} from 'react';
import {
   StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput
} from 'react-native';


import MyButton from './button'
import { Platform } from '@unimodules/core';


export default class App extends Component {
  
  constructor(props){
    super(props);
    
    this.addItem = this.addItem.bind(this)
  }
  
  state = {
    toDo : '',
    items: []
  }
  
  
  addItem(){


    this.setState({
      toDo : '',
      items: [...this.state.items, this.state.toDo],
    })
  }

  renderItem(item) {
    return (
      <View key={item} style={renderItem.boxRender}>
        <Text style={renderItem.text}>
          {item}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContent}>
          <View style={styles.boxContentone}>
            <TextInput value={this.state.toDo} onChangeText={(v) => this.setState({toDo : v})} placeholder={'Ne Yapmak Istiyorsunuz?'} style={styles.textInput}></TextInput>
          </View>
          <View style={styles.boxContenttwo}>
            <MyButton onPress={this.addItem} Text={'Ekle'}/>
          </View>
        </View>
        <View style={{height:0.8, backgroundColor: 'gray', margin:10}}>
        </View>
        <ScrollView>
          <Text>{this.state.items.length}</Text>
          {
            this.state.items.map((item) => this.renderItem(item))
          }
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Platform.OS == 'ios' ? 21 : 0
    
  },

  boxContent: {
    height:100,
    flexDirection: 'row',
    padding:8
  },

  boxContentone: {
    flex:4,
    marginRight:8,
    justifyContent:'center',
  },

  boxContenttwo: {
    flex:1,
  },

  textInput: {
    height:32,
    backgroundColor:'#f4f4f4',
    borderRadius:12,
    paddingLeft:10,
    borderWidth:1,
    borderColor: 'gray'
  }
});

const renderItem = StyleSheet.create({
  boxRender: {
    height:50,
    margin:8,
    borderRadius:16,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#f4f4f4',
    borderWidth:1,
    borderColor: 'gray'
  },

  text: {
    color:'#000',
    fontSize: 21,
  },

})
