import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
export default function About(props) {
    const {navigate} = props.navigation;

    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>ABout screen</Text>

            <TouchableOpacity
                onPress={()=>{
                  navigate('Auth');
                }}
              >
                <Text>home</Text>
              </TouchableOpacity>
        </View>
    );
}