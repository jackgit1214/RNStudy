/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, Platform, StyleSheet,TextInput, Text, View,Button,Alert} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

class Greeting extends Component {
    render() {
        return (
            <View style={styles.welcome}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Greeting name='测试内容，张三'/>
                <Text style={styles.instructions}>{instructions}</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text style={styles.instructions}>欢迎您！！！</Text>
                <Text
                    style={styles.instructions}>这是第一个！！！这是第一个！！！这是第一个！！！这是第一个！！！这是第一个！！！这是第一个！！！这是第一个！！！这是第一个！！！</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <View style={{flex: 1,
                    flexDirection: 'column',
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

                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <Button
                    onPress={() => {
                        Alert.alert("你点击了按钮！");
                    }}
                    title="点我！"
                />
            </View>

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
