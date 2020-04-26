import React, {useState, useContext} from 'react';
import {AsyncStorage} from "react-native";
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
} from 'native-base';
import AppHeader from "../../../components/AppHeader";
import { feed, stories } from '../../../services/fakeData';
import GridView from '../profile/GridView';
import ListFollowing from "../../../components/follow/ListFollowing";
import { users } from '../../../services/fakeData';

export default SearchComponent = ({
  navigation,
  onScroll
}) => {
  const [search, setSearch] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);
  onChangeSearch = () => {
    setSearch()
    setIsSearching(true)
  }
  return (
    <Container style={styles.container}>        
      <Content 
        scrollEventThrottle={300} 
        onScroll={onScroll}
        removeClippedSubviews={true}>
        <Header searchBar>
          <Item  style={{marginLeft: 20, marginRight: 20, borderRadius: 10, textAlign: 'center', flex: 1, alignItems: 'center'}} regular>
            <Icon  style={{marginLeft: 20 }} active name='search' />
            <Input placeholder='Search' 
              value={search}
              onChangeText={onChangeSearch}
            />
          </Item>
          <Button transparent onPress={()=>{setIsSearching(false);setSearch('')}}>
            <Text>Cancel</Text>
          </Button>
        </Header>
        <View style={{marginTop: 10}}>
          {
            (isSearching) ?
            <ListFollowing 
              users={users}
              navigation = {navigation}
            />
            :
            <GridView 
              posts={feed}
            />
          }
        </View>
      </Content>
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
