import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useAuth } from "../../providers/auth";
import * as api from "../../services/auth";
export default function Login(props) {
    const {navigation} = props;
    const {navigate} = navigation;

    //1 - DECLARE VARIABLES
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { handleLogin } = useAuth();
    const fields = [
        {name: 'email', label: 'Email Address', required: true},
        {name: 'password', label: 'Password', required: true, secure: true}
    ];

    async function onSubmit(state) {
      navigate('App');
      
      let response = await api.login({email, password})
      console.log(response)
      handleLogin(response);
    }

    const onPress = () => navigate('App');


    let formProps = {title: "Login", fields, onSubmit, loading};
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
                onPress={onSubmit}
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