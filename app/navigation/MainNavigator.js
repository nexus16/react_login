import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    createAppContainer,
    createSwitchNavigator,
  } from "react-navigation";

//IMPORT SCREEN
import Home from "../screens/features/home";
import Comments from "../screens/features/home/Comments";
import About from "../screens/features/home";
import Profile from "../screens/features/profile";
import Recent from "../screens/features/recent";
import Search from "../screens/features/search";
import ProfileUser from "../screens/features/search/ProfileUser";
import { TabBarIcon } from "../components/TabBarIcon";


const HomeStack = createStackNavigator(
    {
        Home: Home,
        Comments: Comments,
    },
    {
      headerMode: "none"
    }
);
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />
  };

const SearchStack = createStackNavigator(
    {
        Search: Search,
        SearchProfile: ProfileUser,
    },
    {
      headerMode: "none"
    }
);
SearchStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />
  };

const AddStack = createStackNavigator(
    {
        About: About,
    }
);
AddStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="plus-square" />
  };

const RecentStack = createStackNavigator(
    {
        Recent: Recent,
    },
    {
      headerMode: "none"
    }
);
RecentStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="heart" />
  };
  
const ProfileStack = createStackNavigator(
    {
        Profile: Profile,
    },
    {
      headerMode: "none"
    }
);
ProfileStack.navigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />
  };
export default MainNavigator = createAppContainer(
    createBottomTabNavigator(
      {
        HomeStack,
        SearchStack,
        AddStack,
        RecentStack,
        ProfileStack,
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
