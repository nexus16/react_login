import React, {useState,useRef, useEffect} from 'react';
import {Text, View, TextInput, AsyncStorage, TouchableOpacity, StyleSheet} from 'react-native';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_EMAIL_CHANGED,
  SIGN_IN_PASSWORD_CHANGED
} from "./actions";
import { connect } from "react-redux";


const SignInComponent = ({
  onRequestSignIn,
  onEmailChanged,
  onPasswordChanged,
  navigation
}) => {
  let getToken = async () => {
    let token = await AsyncStorage.getItem('TOKEN_KEY');
    if (token)
      navigation.navigate('Main');
  } 
  getToken();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
          <View style={[styles.header]}>
            <Text style={styles.headerText}>
                Login
            </Text>
        </View>
            <View style={{flex: 1}}>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder={"Email"}
              />
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder={"Password"}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{onRequestSignIn(email, password);}}
              >
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
        </View>
  );
};
const styles = StyleSheet.create({
  header: {
      height: 50,
      justifyContent: "center"
  },

  headerText: {
      fontSize: 25,
      color: "#362068",
      fontWeight: "400",
      fontFamily: "Helvetica Neue"
  },

  errorText:{
      marginBottom: 8,
      color:"red"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

const mapStateToProps = state => {
  console.log(state)
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestSignIn: (email, password) => {
      dispatch({type: SIGN_IN_REQUEST, payload: { email, password }})
    }
  }
}

export default Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInComponent);
