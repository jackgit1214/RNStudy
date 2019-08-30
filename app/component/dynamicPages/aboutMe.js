import React from "react";
import {Button, Text, ThemeProvider} from "react-native-elements";
import appTheme from "../theme";
import MainHeader from "../mainHeader";
import {styles} from "../common";

class AboutMe extends React.Component {

    static navigationOptions = {
        title: '我的'

    };

    componentDidMount() {


    }

    render() {
        return (
            <ThemeProvider theme={appTheme}>
                <Text>关于我</Text>
            </ThemeProvider>
        );
    }
}

export default AboutMe;
