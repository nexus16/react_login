import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import RegisterScreen from "../scenes/auth/Register";
import LoginScreen from "../scenes/auth/Login";


//Create Routes
const AuthStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
    }
);

export default AuthStack;