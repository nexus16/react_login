import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
 
export default class CardCompnent extends Component{
    render() {
        return (
          <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} />
              <Body>
                <Text style={{fontWeight: 'bold'}}>Dao_cho</Text>
              </Body>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='ellipsis-h' style={{fontSize: 20}}/>
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image 
              source={{ uri: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' }} 
              style={{ height:400, width:null, flex: 1 }} />
          </CardItem>
          <CardItem style={{ height:45 }}>
            <Left>
              <Button transparent>
                <Icon name='heart' style={{fontSize: 20}}/>
              </Button>
              <Button transparent>
                <Icon name='comment' style={{fontSize: 20}}/>
              </Button>
              <Button transparent>
                <Icon name='send' style={{fontSize: 20}}/>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='bookmark' style={{fontSize: 20}}/>
              </Button>
            </Right>
          </CardItem>
          <CardItem style={{ height: 20 }}>
            <Text>101 likes</Text>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{ fontWeight:'900'}}>Anpigon</Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </Text>
            </CardItem>
          </Card>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});