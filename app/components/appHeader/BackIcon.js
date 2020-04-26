import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BackIcon extends Component {
  render() {
    return (
      <Icon
        name={"chevron-left"}
        style={{ paddingRight: 15, fontSize: 20 }}
        onPress={()=>this.props.navigation.goBack()}
      />
    );
  }
}

export default BackIcon;