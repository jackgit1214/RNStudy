import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import HomeScreen from './dynamicPages/redux'
import ComponentList from './dynamicPages/componentList'
import AboutMe from './dynamicPages/aboutMe'
import Normal from './dynamicPages/normal'
import {Icon, Text, ThemeProvider} from "react-native-elements";
import MainHeader from "./mainHeader";


const bottomTabNavigator = createBottomTabNavigator({
    Normal:{
        screen:Normal
    },
    Home: {
        screen:HomeScreen,
        path: '/home',

    },
    ComponentList: ComponentList,
    AboutMe: AboutMe
}, {

    initialRouteName: 'Normal',

    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        // Android's default showing of icons is false whereas iOS is true
        showIcon: true,
    },
});

export default createStackNavigator(
    {
        bottomTab: {
            screen: bottomTabNavigator,
            navigationOptions: ({navigation}) => ({
                header: (
                    <MainHeader navigation={navigation}/>
                ),
            }),
        },
    },
    {
        headerMode: 'screen',

        navigationOptions: {
            drawerLabel: '动态数据',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="settings"
                    size={30}
                    iconStyle={{
                        width: 30,
                        height: 30,
                    }}
                    type="material"
                    color={tintColor}
                />
            ),
        }
    }
);
