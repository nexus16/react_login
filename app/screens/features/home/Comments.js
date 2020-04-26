import React, {useState, useContext} from 'react';
import {TouchableOpacity, Dimensions} from "react-native";
import { connect } from "react-redux";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  Container, 
  Content, 
  Thumbnail, 
  Header, 
  Title, 
  Left, 
  Right, 
  Body, 
  Button,
  Item,
  Input,
  List,
  ListItem,
  Footer,
  FooterTab
} from 'native-base';
import AppHeader from "../../../components/appHeader";
import IconHeader from "../../../components/appHeader/IconHeader";
import BackIcon from "../../../components/appHeader/BackIcon";
import { feed, stories } from '../../../services/fakeData';
import GridView from '../profile/GridView';
import ListFollowing from "../../../components/follow/ListFollowing";
import { comments } from '../../../services/fakeData';
const { width } = Dimensions.get('window');

export default Comments = ({
  navigation,
  onScroll
}) => {
  const [search, setSearch] = React.useState('');
  
  return (
    <Container style={styles.container}>        
      <Content 
        scrollEventThrottle={300} 
        onScroll={onScroll}
        removeClippedSubviews={true}>
        <AppHeader
            title={"Comments"}
          >
            <AppHeader.LeftHeader>
              <BackIcon
                navigation={navigation}
              />
            </AppHeader.LeftHeader>
            <AppHeader.RightHeader>
              <IconHeader
                name="send"
              />
            </AppHeader.RightHeader>
          </AppHeader>
        <View style={{marginTop: 10}}>
          <List>
          {comments.map(comment => (
            <ListItem avatar noBorder key={comment.id} style={{marginBottom: 15}}>
              <Left>
                <Thumbnail source={comment.avatar} style={{width: 30, height: 30}}/>
              </Left>
              <Body>
                <Text>
                  <Text style={{fontWeight: "bold"}}>{comment.nickname}</Text> {comment.comment}
                </Text>
                
                <Text note>{comment.date}</Text>
              </Body>
              <Right>
                <Icon name='heart' style={{fontSize: 15}}/>
              </Right>
            </ListItem>
          ))}
          </List>
        </View>
        
      </Content>
      <Footer>

          <Left style={{marginRight: 5, marginLeft: 5}}>
            <Thumbnail source={comments[0].avatar} style={{width: 30, height: 30}}/>
          </Left>
          <Right >
            <Item rounded style={{width: width - 45, marginRight: 5}}>
              <Input placeholder='Add a comment'/>
              <TouchableOpacity >
                <Text style={{marginRight: 20, fontWeight: "bold", color: "blue"}}>Post</Text>
              </TouchableOpacity>
            </Item>
          </Right>
        </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 25,
    color: '#242424',
  }
});
