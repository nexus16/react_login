
import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import {AsyncStorage} from "react-native";
import CardComponent from "../../../components/CardComponent";
import ProfileComponent from "./ProfileComponent";
import { connect } from "react-redux";
import { profile } from '../../../services/fakeData';

const ProfileContainer = ({
  navigation
}) => {
  return (
    <ProfileComponent profile={profile}/>
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

export default Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
