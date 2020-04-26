import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import {AsyncStorage} from "react-native";
import CardComponent from "../../../components/CardComponent";
import HomeComponent from "./HomeComponent";
import { connect } from "react-redux";

const HomeContainer = ({
  navigation
}) => {
  return (
    <HomeComponent navigation={navigation}/>
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

export default Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
