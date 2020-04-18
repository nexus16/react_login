import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

//IMPORT SCENES
import HomeScreen from "../scenes/home/Home";
import UpdateProfileScreen from "../scenes/home/UpdateProfile";


const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        UpdateProfile: UpdateProfileScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default HomeStack;