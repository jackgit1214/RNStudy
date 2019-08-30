import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    ImageBackground
} from "react-native";

import RNPopover from 'react-native-popover-menu'
import Icon from "react-native-vector-icons/FontAwesome";
import {createStackNavigator} from "react-navigation";


class Bottom extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Bottom Left"}
                    ref={ref => {
                        this.ref1 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref1)
                    }}
                />
                <Button
                    title={"Bottom Right"}
                    ref={ref => {
                        this.ref2 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref2)
                    }}
                />
            </View>
        );
    }
}

class Center_Con extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Center Left"}
                    ref={ref => {
                        this.ref1 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref1)
                    }}
                />
                <Button
                    title={"Center Center"}
                    ref={ref => {
                        this.ref2 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref2)
                    }}
                />
                <Button
                    title={"Center Right"}
                    ref={ref => {
                        this.ref3 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref3)
                    }}
                />
            </View>
        );
    }
}

class Top extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title={"Top Left"}
                    ref={ref => {
                        this.ref1 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref1)
                    }}
                />
                <Button
                    title={"Top Right"}
                    ref={ref => {
                        this.ref2 = ref
                    }}
                    onPress={() => {
                        this.props.onPress(this.ref2)
                    }}
                />
            </View>
        );
    }
}

 class PopMenu extends React.Component<{}> {
    constructor (props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    _onPress = (ref) => {
         let copy = <Icon name="copy" size={30} color="#000000" family={"FontAwesome"} />;
        let paste = <Icon name="paste" size={30} color="#000000" family={"FontAwesome"} />;
        let share = <Icon name="share" size={30} color="#000000" family={"FontAwesome"} />;

        let menusAndroid = [
            {
                label: "Editing",
                menus: [
                    {
                        label: "Copy",
                        icon: copy
                    },
                    {
                        label: "Paste",
                        icon: paste
                    }
                ]
            },
            {
                label: "Other",
                menus: [
                    {
                        label: "Share",
                        icon: share
                    }
                ]
            },
            {
                label: "",
                menus: [
                    {
                        label: "Share me please"
                    }
                ]
            }
        ]

        let menus
        if (Platform.OS === 'android') {
            menus = menusAndroid;
        } else if (Platform.OS === 'ios') {
           // menus = meunsIOS;
        }

        RNPopover.Show(ref, { menus: menus, onDone: selection => {
                console.log("selected item index: " + selection);
            }, onCancel: () => {
                console.log("popover canceled");
            }, tintColor: "#888888", textColor: "#FFFFFF" });
    }

    _show (ref) {
        this.ref = ref

        this.setState({
            visible: true
        })
    }

    render() {
        let copy = <Icon name="copy" size={30} color="#000000" family={"FontAwesome"} />;
         let paste = <Icon name="paste" size={30} color="#000000" family={"FontAwesome"} />;
         let share = <Icon name="share" size={30} color="#000000" family={"FontAwesome"} />;

        let popover;
        if (Platform.OS === 'android') {
            popover = <RNPopover visible={this.state.visible} reference={this.ref} onDone={(mainMenuSelection, subMenuSelection) => {
                console.log("selection: " + mainMenuSelection + ", " + subMenuSelection);
            }}>
                <RNPopover.Menu label={"Editing"}>
                    <RNPopover.Menu label={"Copy"} icon={copy} />
                    <RNPopover.Menu label={"Paste"} icon={paste} />
                </RNPopover.Menu>
                <RNPopover.Menu>
                    <RNPopover.Menu label={"Share"} icon={share} />
                </RNPopover.Menu>
            </RNPopover>;
        } else if (Platform.OS === 'ios') {
            popover = <RNPopover visible={this.state.visible} reference={this.ref} onDone={(selection) => {
                console.log("selection: " + selection);
            }} >
                <RNPopover.Menu label={"Editing"}>
                    <RNPopover.Menu label={"Copy"}  />
                    <RNPopover.Menu label={"Paste"}  />
                    <RNPopover.Menu label={"Share"}  />
                </RNPopover.Menu>
            </RNPopover>;
        }

        return <ImageBackground source={require("../../assets/images/bg_screen1.jpg")} style={styles.backgroundImage}>
            <Top style={styles.top} onPress={ref => {
                //this._onPress(ref);
                 this._show(ref);
            }} />
            <Center_Con style={styles.center} onPress={ref => {
                this._onPress(ref);
                // this._show(ref);
            }} />
            <Bottom style={styles.bottom} onPress={ref => {
                this._onPress(ref);
                // this._show(ref);
            }} />
            {popover}
        </ImageBackground>;
    }
}


const PopMenuDrawerItem = createStackNavigator(
    {
        Playground: {
            screen: PopMenu,

            navigationOptions: ({ navigation }) => ({
                title: '弹出菜单',
                headerLeft: (
                    <Icon
                        name="menu"
                        size={30}
                        type="entypo"
                        iconStyle={{ paddingLeft: 10 }}
                        onPress={navigation.toggleDrawer}
                    />
                ),
            }),
        },
    }
);

PopMenuDrawerItem.navigationOptions = {
    drawerLabel: '弹出菜单',
    drawerIcon: ({ tintColor }) => (
        <Icon
            name="menu"
            size={30}
            iconStyle={{
                width: 30,
                height: 30,
            }}
            type="material"
            color={tintColor}
        />
    ),
};

export default PopMenuDrawerItem;
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    textStyle: {
        color: "#FFFFFF"
    },
    top: {
        flex: 1
    },
    center: {
        flex: 1
    },
    bottom: {
        flex: 1
    }
});
