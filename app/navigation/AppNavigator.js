import {
    createAppContainer,
    createSwitchNavigator,
  } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import { connect } from 'react-redux';
import MainNavigator from "./MainNavigator";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import ForgotPassword from "../screens/auth/forgotPassword";
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
        }
    },
});

const NavContainer =  createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthStack,
            Main: MainNavigator
        },
        {
            initialRouteName: "Auth"
        }
    )
);


export const navReducer = createNavigationReducer(NavContainer);

export const navMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);
const mapStateToProps = (state) => ({
    state: state.nav,
  });

const NavReduxNavigator = createReduxContainer(NavContainer);
export default AppNavigator = connect(mapStateToProps)(NavReduxNavigator);