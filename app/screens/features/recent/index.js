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
  Spinner 
} from 'native-base';
import AppHeader from "../../../components/AppHeader";
import ListFollowing from "../../../components/follow/ListFollowing";
import ListRecent from "./ListRecent";
import { users } from '../../../services/fakeData';

const RecentContainer = ({
  navigation,
  onScroll
}) => {
  return (
    <Container style={styles.container}>        
      <AppHeader
        title="Recent"
      />
      <Content 
        scrollEventThrottle={300} 
        onScroll={onScroll}
        removeClippedSubviews={true}>
        <ListRecent />
        <Text style={{fontWeight: 'bold', marginLeft: 10,marginBottom: 20, marginTop: 20, fontSize: 20}}>Suggest for you</Text>
        <ListFollowing users={users}/>
      </Content>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default Recent = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentContainer);
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
