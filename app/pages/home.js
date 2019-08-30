import React from 'react';
import {Button, View, Text, Image , Platform, StyleSheet,TextInput, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Divider } from 'react-native-elements';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class Greeting extends React.Component {
    render() {
        return (
            <View style={styles.welcome}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };
    componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        },200);

    }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Divider style={{ backgroundColor: 'blue' }}>


                    <Text>Home Screen</Text>

                    <Greeting name='测试内容，张三'/>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Image source={pic} style={{width: 193, height: 110}}/>
                    <Text style={styles.instructions}>欢迎您！！！</Text>
                    <Text
                        style={styles.instructions}>这是第一个！！！这是第一个！！！这是第一个！！！</Text>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Details',{
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })}
                    />

                    <View style={{                 flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'stretch',}}>
                        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                            <Text style={styles.welcome}>Welcome to React Native!</Text>
                        </View>
                        <View style={{flex: 2, backgroundColor: 'skyblue'}}>

                        </View>
                        <View style={{flex: 3, backgroundColor: 'steelblue'}}>

                        </View>
                    </View>

            </Divider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default HomeScreen;
