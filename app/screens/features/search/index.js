import React, {useState, useContext} from 'react';
import {AsyncStorage} from "react-native";
import { connect } from "react-redux";

import SearchComponent from "./SearchComponent";
const SearchContainer = ({
  navigation
}) => {
  return (
    <SearchComponent 
      navigation={navigation}
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

export default Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);