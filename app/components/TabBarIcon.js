import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../constants/Colors";
Icon.loadFont()

export class TabBarIcon extends Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={{
          marginBottom: -3,
          color: this.props.focused ? Colors.red : Colors.tabIconDefault
        }}
        type="AntDesign"
      />
    );
  }
}
