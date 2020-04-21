import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createAppContainer,
    createSwitchNavigator,
  } from "react-navigation";

//IMPORT SCREEN
import Home from "../screens/features/home";
import About from "../screens/features/home";
import { TabBarIcon } from "../components/TabBarIcon";


const HomeStack = createStackNavigator(
    {
        Home: Home,
    }
);
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="book" />
  };
const AboutStack = createStackNavigator(
    {
        About: About,
    }
);
AboutStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />
  };
export default MainNavigator = createAppContainer(
    createBottomTabNavigator(
      {
        HomeStack,
        AboutStack
      },
      {
        tabBarOptions: {
          showLabel: false,
          style: {
            borderWidth: 0,
            borderTopColor: "transparent"
          }
        }
      }
    )
  );
