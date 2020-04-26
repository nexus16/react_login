import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Like from "../like";
export default class Post extends Component{
    constructor(props) {
      super(props);

      this.state = {
        likes: props.likes,
      };
    }
    handleLike = () => {
      console.log(this.props.author);
    };
    render() {
        const {
          author,
          profilePic,
          date,
          image,
          content,
          likes,
          comments,
          navigation
        } = this.props;
        return (
          <Card>
          <CardItem>
            <Left>
              <Thumbnail source={profilePic} />
              <Body>
                <Text style={{fontWeight: 'bold'}}>{author}</Text>
              </Body>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='ellipsis-h' style={{fontSize: 20}}/>
              </Button>
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Like onLike={this.handleLike}>
              <Image 
                source={image} 
                style={{ height:400, width:null, flex: 1 }} />
            </Like>
          </CardItem>
          <CardItem style={{ height:45 }}>
            <Left>
              <Button transparent>
                <Icon name='heart' style={{fontSize: 20}}/>
              </Button>
              <Button transparent>
                <Icon 
                  name='comment' 
                  style={{fontSize: 20}}
                  onPress={()=>navigation.navigate('Comments')}
                />
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
              <Text style={{ fontWeight:'900'}}>{author}</Text>
              {content}
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