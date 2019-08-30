import React from "react";
import {Button, Icon, Text, ThemeProvider} from "react-native-elements";
import SplashScreen from "react-native-splash-screen";
import appTheme from "../theme";
import {ImageBackground,View} from "react-native";
import common from '../common'

class HomeScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'home',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icon
                name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                size={30}
                type="material-community"
                color={tintColor}
            />
        ),
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        }, 200);

    }

    render() {
        const {navigation} = this.props;

        return (
            <ThemeProvider theme={appTheme} >
                <View style={{paddingLeft:10,paddingRight:10}}>
                    <Text h1>test </Text>
                    <Button
                        title="open drawer"
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                    <Button
                        title="close drawer"
                        onPress={() => this.props.navigation.closeDrawer()}
                    />
                    <Button
                        title="toggle drawer"
                        type="outline"
                        onPress={() => this.props.navigation.toggleDrawer()}
                    />
                    <Button
                        title="Clear button"
                        type="clear"
                    />
                    <Button
                    title="Loading button"
                    loading
                    />
                    <ImageBackground source={common.screen.bgImage} style={common.style.bgImage}>
                        <Button
                            title="Create an Account"
                            clear
                            activeOpacity={0.5}
                            titleStyle={{color: 'white', fontSize: 15}}
                            containerStyle={{marginTop: -10}}
                            onPress={() => console.log('Account created')}
                        />
                    </ImageBackground>
                </View>
            </ThemeProvider>
        );
    }
}

export default HomeScreen;
