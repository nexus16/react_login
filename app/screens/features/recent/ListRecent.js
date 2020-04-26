import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { feed, recents } from '../../../services/fakeData';


export default  ListRecent = () => (
  <List>
    {recents.map((recent, index) => (
      <ListItem avatar  key={recent.id}>
        <Left>
          <Thumbnail source={recent.userAvatar} />
        </Left>
        <Body>
          <Text  style={{paddingBottom: 12, paddingTop: 12}}>
            <Text style={{ fontWeight: 'bold' }}>{recent.user}</Text> Da nhac den ban trong mot binh luan: {recent.content}
          </Text>
        </Body>
        <Right>
          <Thumbnail square source={recent.postImage} />
        </Right>
      </ListItem>
    ))}
  </List>
);
