import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, ButtonGroup, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
//import {LinearGradient} from "../components/LinearGradient";
import SplashScreen from "react-native-splash-screen";
import {NavigationActions,NavigationEvents } from "react-navigation";

class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedIndexes: [0, 2, 3],
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        }, 200);
        // 添加监听
        console.log("888888888888888888888888888888"); //页面加载完成后调用一次
        this.viewDidAppear = this.props.navigation.addListener(
            'didFocus',
            (obj)=>{
                //每次激活页面都调用,这是一种方式，下面有另一种方式的例子
                console.log("------------------------------===================="+obj)
            }
        )
    }

    render() {
        const navigationAction = NavigationActions.navigate({
            routeName: 'Button_Detail',
            params: {name:'test navigage'},

            // navigate can have a nested navigate action that will be run inside the child router
            //action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
        });


        return (

            <ScrollView style={styles.container}>

                <View style={styles.contentView}>
                    <View style={styles.headerContainer}>
                        <Icon color="white" name="rocket" type="font-awesome" size={36}/>
                        <Text style={styles.heading}>Buttons</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Button
                            title="Go to Details"
                            onPress={() => {
                                this.props.navigation.dispatch(navigationAction);
                                //或
                                // this.props.navigation.navigate('Button_Detail',{
                                //     name:'jack'
                                // })
                            }}
                        />
                        <Button
                            title={`Welcome to\nReact Native Elements`}
                            containerStyle={{marginVertical: 10}}
                        />
                        <Button
                            title="LOG IN"
                            buttonStyle={{
                                backgroundColor: 'black',
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 30,
                            }}
                            containerStyle={{marginVertical: 10, height: 50, width: 250}}
                            titleStyle={{fontWeight: 'bold'}}
                        />
                        <Button
                            title="Log in"
                            loading={false}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={{
                                backgroundColor: 'rgba(111, 202, 186, 1)',
                                borderRadius: 5,
                            }}
                            titleStyle={{fontWeight: 'bold', fontSize: 23}}
                            containerStyle={{marginVertical: 10, height: 50, width: 230}}
                            onPress={() => console.log('aye')}
                            underlayColor="transparent"
                        />

                        <LinearGradient colors={['#FF9800', '#F44336']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Add to Cart
                            </Text>
                            <Icon name="arrow-right" type="font-awesome" size={15} color="white"/>
                        </LinearGradient>
                        <LinearGradient colors={['#FF9800', '#F44336']} style={styles.linearGradient}>
                            <Button
                                title="Add to Cart"
                                titleStyle={{fontWeight: 'bold', fontSize: 18}}
                                buttonStyle={{
                                    borderWidth: 0,
                                    borderColor: 'transparent',
                                    borderRadius: 20,
                                }}
                                containerStyle={{marginVertical: 10, height: 40, width: 200}}
                                icon={{
                                    name: 'arrow-right',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                iconRight
                                iconContainerStyle={{marginLeft: 10, marginRight: -10}}
                            />
                        </LinearGradient>
                        <Button
                            title="Request an agent"
                            titleStyle={{fontWeight: '500'}}
                            buttonStyle={{
                                backgroundColor: 'rgba(199, 43, 98, 1)',
                                borderColor: 'transparent',
                                borderWidth: 0,
                            }}
                            containerStyle={{marginTop: 10, width: 275, height: 45}}
                        />
                        <Button
                            title="SIGN UP"
                            disabled={true}
                            titleStyle={{fontWeight: '700'}}
                            buttonStyle={{
                                backgroundColor: 'rgba(92, 99,216, 1)',
                                borderColor: 'transparent',
                                borderWidth: 0,
                                borderRadius: 5,
                            }}
                            containerStyle={{marginTop: 20, width: 300, height: 45}}
                        />
                        <Button
                            title="SIGN UP"
                            loading={true}
                            loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
                            titleStyle={{fontWeight: '700'}}
                            buttonStyle={{
                                backgroundColor: 'rgba(92, 99,216, 1)',
                                borderColor: 'transparent',
                                borderWidth: 0,
                                borderRadius: 5,
                                paddingVertical: 10,
                            }}
                            containerStyle={{marginTop: 20, width: 300, height: 45}}
                        />
                        <View style={styles.buttonsContainer}>
                            <Button
                                title="HOME"
                                icon={{
                                    name: 'home',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                iconContainerStyle={{marginRight: 10}}
                                titleStyle={{fontWeight: '700'}}
                                buttonStyle={{
                                    backgroundColor: 'rgba(90, 154, 230, 1)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    borderRadius: 30,
                                }}
                                containerStyle={{width: 130}}
                            />
                            <Button
                                title="PROFILE"
                                icon={{
                                    name: 'user',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                iconRight
                                iconContainerStyle={{marginLeft: 10}}
                                titleStyle={{fontWeight: '700'}}
                                buttonStyle={{
                                    backgroundColor: 'rgba(199, 43, 98, 1)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    borderRadius: 30,
                                }}
                                containerStyle={{width: 150}}
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button
                                title="Basic Button"
                                buttonStyle={{
                                    backgroundColor: 'rgba(78, 116, 289, 1)',
                                    borderRadius: 3,
                                }}
                            />
                            <Button
                                title="Outline Button"
                                buttonStyle={{
                                    borderColor: 'rgba(78, 116, 289, 1)',
                                }}
                                type="outline"
                                titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button
                                title="HOME"
                                loading
                                titleStyle={{fontWeight: '700'}}
                                buttonStyle={{
                                    backgroundColor: 'rgba(111, 202, 186, 1)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    borderRadius: 30,
                                    paddingVertical: 10,
                                }}
                                containerStyle={{width: 100, height: 40}}
                            />
                            <Button
                                title="Clear Button"
                                type="clear"
                                titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
                            />
                        </View>
                        <View style={styles.buttonsContainer}>
                            <Button
                                title="Light"
                                buttonStyle={{
                                    backgroundColor: 'rgba(244, 244, 244, 1)',
                                    borderRadius: 3,
                                }}
                                containerStyle={{height: 40}}
                                titleStyle={{marginHorizontal: 20, color: 'black'}}
                            />
                            <Button
                                title="Dark"
                                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
                                containerStyle={{height: 40}}
                                titleStyle={{color: 'white', marginHorizontal: 20}}
                            />
                            <Button
                                title="Default"
                                containerStyle={{height: 40}}
                                buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)'}}
                                titleStyle={{color: 'white', marginHorizontal: 20}}
                            />
                        </View>
                        <View style={[styles.buttonsContainer, {marginBottom: 20}]}>
                            <Button
                                title="Secondary"
                                buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)'}}
                                containerStyle={{height: 40}}
                                titleStyle={{color: 'white', marginHorizontal: 20}}
                            />
                            <Button
                                title="Danger"
                                buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)'}}
                                containerStyle={{height: 40}}
                                titleStyle={{color: 'white', marginHorizontal: 20}}
                            />
                        </View>
                    </View>
                    <View
                        style={[styles.headerContainer, {backgroundColor: '#292C44'}]}
                    >
                        <Icon color="white" name="wrench" type="font-awesome" size={62}/>
                        <Text style={styles.heading}>Button Groups</Text>
                    </View>
                    <ButtonGroup
                        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
                        selectedIndex={this.state.selectedIndex}
                        onPress={selectedIndex => {
                            this.setState({selectedIndex});
                        }}
                        containerStyle={{marginBottom: 20}}
                    />
                    <ButtonGroup
                        buttons={['Multiple', 'Select', 'Button', 'Group']}
                        selectMultiple
                        selectedIndexes={this.state.selectedIndexes}
                        onPress={selectedIndexes => {
                            this.setState({selectedIndexes});
                        }}
                        containerStyle={{marginBottom: 20}}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    contentView: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#4F80E1',
        marginBottom: 20,
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default Buttons;
