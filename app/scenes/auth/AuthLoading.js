import React, {useState, useContext, useEffect} from 'react';
import {Text, View, Button, ActivityIndicator, Alert} from 'react-native';
import { useAuth } from "../../providers/auth";

export default function AuthLoading(props) {
    const {navigate} = props.navigation;
    const { getAuthState } = useAuth();
    useEffect(()=>{
      initialize();
    }, []);

    async function initialize(){
      const {token, user} = await getAuthState();
      console.log(token)
      if (token) 
        navigate('App')
      else
        navigate('Auth');
    }

    return (
      <View style={{backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator/>
          <Text>{"Loading User Data"}</Text>
      </View>
    );
}