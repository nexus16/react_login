import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import {AsyncStorage} from "react-native";

export default function Home(props) {
    const {navigate} = props.navigation;

    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home screen</Text>

            <TouchableOpacity
                onPress={()=>{
                  AsyncStorage.removeItem('TOKEN_KEY');
                  navigate('Auth');
                }}
              >
                <Text>Log out</Text>
              </TouchableOpacity>
        </View>
    );
}