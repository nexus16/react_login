import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//IMPORT ROUTES
import AuthStack from "./routes/auth";
import HomeStack from "./routes/home";


//APP ROUTES STACK
const AppStack = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: HomeStack
    },
    {initialRouteName: 'Auth'}
);

const Navigator = createAppContainer(AppStack);

export default function Router(props) {
    return (
        <>
            <Navigator/>
        </>
    );
}