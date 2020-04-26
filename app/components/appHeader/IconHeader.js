import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconHeader extends Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        style={{ paddingRight: 15, fontSize: 20 }}
        onPress={()=>this.props.pressIcon}
      />
    );
  }
}

export default IconHeader;