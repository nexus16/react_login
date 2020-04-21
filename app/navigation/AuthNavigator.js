import {
    createAppContainer,
    createSwitchNavigator,
  } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
  
import MainNavigator from "./MainNavigator";
import Login from "../screens/auth/login/index";

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
        header: null
        }
    }
});

export default createAppContainer(
createSwitchNavigator(
    {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    Main: MainNavigator
    },
    {
    initialRouteName: "Auth"
    }
)
);
