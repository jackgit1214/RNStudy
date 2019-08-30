import React from "react";
import {Input, Text, ThemeProvider} from "react-native-elements";
import appTheme from "../theme";
import Icon from "react-native-vector-icons/FontAwesome";

class componentSceen extends React.Component {
    render() {
        return (
            <ThemeProvider theme={appTheme}>
                <Text>Settings!</Text>
                <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
                />

                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Input
                    placeholder='INPUT WITH SHAKING EFFECT'
                    shake={true}
                />

                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{color: 'red'}}
                    errorMessage='ENTER A VALID ERROR HERE'
                />
            </ThemeProvider>
        );
    }
}

export default componentSceen;
