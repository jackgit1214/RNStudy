import React from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

class DetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '22',count:0};
    };

    static navigationOptions = ({navigation}) => {
        return {
            title: 'DetailScreen' + navigation.getParam('itemId', ' no Id'),
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight:'bold',
            },
            headerRight: (
                <Button
                    onPress={navigation.getParam('increaseCount')}
                    title="+1"
                    color="#00ff00"
                />
            ),
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Info"
                    color="#fff"
                />
            ),
        };
    };
    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 3,
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        const {navigation} = this.props;

        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}{this.state.count}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'stretch',
                }}>
                    <View style={{flex: 1}}>
                        <Button
                            title="updateParam"
                            onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            title="Go back"
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            onPress={() => {
                                Alert.alert("你点击了按钮！");
                            }}
                            title="点我！"
                        />
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
            </View>
        );
    }
}

export default DetailsScreen;
