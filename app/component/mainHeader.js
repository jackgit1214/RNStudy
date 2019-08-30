import React from 'react';
import {Avatar, Header, SearchBar} from "react-native-elements";
import RNPopover from 'react-native-popover-menu'
import Icon from "react-native-vector-icons/FontAwesome";

import {StyleSheet} from 'react-native';
import common from './common';

const dummySearchBarProps = {
    showLoading: false,
    onFocus: () => console.log('focus'),
    //onBlur: () => console.log('blur'),
    //onCancel: () => console.log('cancel'),
    //onClearText: () => console.log('cleared'),
    //onChangeText: text => console.log('text:', text),
};


class UserAvatar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Touchable: Avatar
        };
    }

    _onPress = (ref) => {
        let copy = <Icon name="copy" size={30} color="#000000" family={"FontAwesome"}/>;
        let paste = <Icon name="paste" size={30} color="#000000" family={"FontAwesome"}/>;
        let share = <Icon name="share" size={30} color="#000000" family={"FontAwesome"}/>;
        let menus = [
            {
                //label: "Editing",
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
                //label: "Other",
                menus: [
                    {
                        label: "Share",
                        icon: share
                    }
                ]
            },
            {
                // label: "ttt",
                menus: [
                    {
                        label: "Share me please"
                    }
                ]
            }
        ]

        RNPopover.Show(ref, {
            menus: menus,
            onDone: selection => {
                console.log("selected item index: " + selection);
            },
            onCancel: () => {
                console.log("popover canceled");
            }

        });
    }

    render() {
        return (
            <Avatar rounded onPress={() => {
                this._onPress(this)
            }} overlayContainerStyle={{backgroundColor: '#336655'}}  icon={{name: 'user', color:'red', type: 'entypo'}}
                    {...this.props}
            />

        );
    }
}

class LeftMenu extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <Icon
                name='navicon' size={30} family={"FontAwesome"} color='#fff' onPress={() => {
                    console.log('open left menu...................')
                navigation.openDrawer();
            }}/>
        )
    }
}

class mainHeader extends React.Component {

    state = {
        search: '',
    };
    updateSearch = search => {
        this.setState({search});
    };
    _onPopMenu = (ref) => {
        let copy = <Icon name="copy" size={30} color="#000000" family={"FontAwesome"}/>;
        let paste = <Icon name="paste" size={30} color="#000000" family={"FontAwesome"}/>;
        let share = <Icon name="share" size={30} color="#000000" family={"FontAwesome"}/>;

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

        let menus = menusAndroid;
        // if (Platform.OS === 'android') {
        //     menus = menusAndroid;
        // } else if (Platform.OS === 'ios') {
        //     menus = meunsIOS;
        // }
        console.log("-------------2---------------------------")
        console.log(menus);
        console.log(ref)
        RNPopover.Show(ref, {
            menus: menus, onDone: selection => {
                console.log("selected item index: " + selection);
            }, onCancel: () => {
                console.log("popover canceled");
            }, tintColor: "#888888", textColor: "#FFFFFF"
        });
    };
    _onPress = (ref) => {
        this._onPopMenu(ref);
    }

    render() {
        const {search} = this.state;
        const navigation = this.props.navigation;

        return (<Header containerStyle={{height: 50, paddingTop: 2}}
                        leftComponent={<LeftMenu navigation={navigation}/>}
                        centerComponent={<SearchBar containerStyle={styles.containerStyle}
                                                    inputContainerStyle={styles.inputContainerStyle}
                                                    placeholder="Type Here..." onChangeText={this.updateSearch}
                                                    {...dummySearchBarProps} value={search}/>}
                        rightComponent={<UserAvatar navigation={navigation}/>}

        />);
    }
}

export default mainHeader;

const styles = StyleSheet.create({
    containerStyle: {
        height: 30,
        justifyContent: 'center',
        width: common.screen.screen_width * 0.8,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        backgroundColor: 'transparent',
    },
    inputContainerStyle: {
        height: 30,
        borderRadius: 50,
        borderColor: 'red',
        backgroundColor: 'white',
    },
    container: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    }, menuOptions: {
        padding: 50,
    },
    menuTrigger: {
        padding: 5,
    },
});
