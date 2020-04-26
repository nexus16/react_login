import React, {Component} from 'react';
import { Text } from 'react-native';
import { Header, Left, Right, Body, StatusBar } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconComponent from "./IconComponent";
// import ç from "./RightIcon";
import IconHeader from "./IconHeader";

export default class AppHeader extends Component {
  constructor(props){
    super(props)
  }

  render(h) {
    const {
      leftIconName,
      rightIconName, 
      title,
      styleTitle 
    } = this.props;
    const children = React.Children.toArray(this.props.children);

    return (
      <Header style={{backgroundColor:'white'}}>
        <Left>
          {children[0]}
        </Left>
        <Body>
          <Text style={{fontSize: 25}}>{title}</Text>
        </Body>
        <Right>
          {children[1]}
        </Right>
      </Header>
    );
  };
}

AppHeader.LeftHeader = IconComponent;
AppHeader.RightHeader = IconComponent;


