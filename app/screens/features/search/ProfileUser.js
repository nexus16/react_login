import React, {useState, useContext} from 'react';
import {AsyncStorage} from "react-native";
import { connect } from "react-redux";

import ProfileComponent from "../profile/ProfileComponent";
import { profile } from '../../../services/fakeData';

const ProfileContainer = ({
  navigation
}) => {
  const user = navigation.getParam('user')
  return (
    <ProfileComponent 
      navigation={navigation}
      profile={user}
      type={1}
    />
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

export default ProfileUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);