import React from 'react';
import { Text } from 'react-native';
import { Header, Left, Right, Body, StatusBar } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  function AppHeader({leftIconName, rightIconName, title, styleTitle }) {
  return (
    <Header style={{backgroundColor:'white'}}>
      <Left>
        <Icon
          name={leftIconName}
          style={{ paddingLeft: 15, fontSize: 20 }}
        />
      </Left>
      <Body>
        <Text style={{fontSize: 25}}>{title}</Text>
      </Body>
      <Right>
        <Icon
          name={rightIconName}
          style={{ paddingRight: 15, fontSize: 20 }}
        />
      </Right>
    </Header>
  );
}
