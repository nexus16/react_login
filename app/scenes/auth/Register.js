import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert} from 'react-native';


export default function RegisterScreen(props) {
    const {navigate} = props.navigation;


    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>RegisterScreen screen</Text>
        </View>
    );
}