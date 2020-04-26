import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';

export default  ListFollowing = (props) => {
  const {
    users,
    navigation
  } = props;
  goToDetail = (user) => {
    console.log(navigation)
    navigation.navigate('SearchProfile',{
      user: user,
    });
  }
  return (
    <List>
      {users.map((user, index) => (
        <ListItem avatar  key={user.id} noBorder onPress={()=>{goToDetail(user)}}>
          <Left>
            <Thumbnail source={user.avatar} />
          </Left>
          <Body>
            <Text>{user.nickname}</Text>
            <Text note numberOfLines={1}>{user.username}</Text>
          </Body>
          <Right>
            {
            user.is_following ? 
            <Button primary><Text style={{color: 'white', paddingLeft: 10, paddingRight: 10}}> Following </Text></Button>
            :
            <Button bordered dark><Text  style={{fontWeight: 'bold', paddingLeft: 10, paddingRight: 10}}> Follow </Text></Button>
            }
          </Right>
        </ListItem>
      ))}
    </List>
  );
};
