import React from "react";
import {Button, Icon, ListItem, ThemeProvider,Text} from "react-native-elements";
import appTheme from "../theme";
import {StyleSheet, View,ScrollView} from "react-native";


class NormalDynamic extends React.Component {
    static navigationOptions = {
        title: '正常请求',
        tabBarIcon: ({tintColor, focused}) => (
            //<IconFont name="copy" size={30} color="#000000" family={"FontAwesome"}/>
            <Icon name={focused ? 'book' : 'bookmark'} size={30} color={tintColor} type={"FontAwesome"}/>
        ),
    }

    constructor(props) {
        super(props);
        this.state = {typeData: null,isLoad:0}
        //this.getTypeData();

    }

    getTypeData(url) {
        // let bodyData = {type: '1'}
        if (url==undefined||url==null)
            url = 'http://10.10.110.18:8001/xcbx/mobile/getBaseData';
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'post',
                headers: new Headers({
                    //'Accept': 'application/json',
                    //'Content-Type': 'application/json;charset=utf-8'
                    "Content-Type": "application/x-www-form-urlencoded"
                }),
                body: "type=1"
            }).then((response) => {
                return response.json();
            }).then((responseData) => {
                    this.setState({typeData:responseData.data,isLoad:1});
            }).catch((error) => {
                    this.setState({isLoad:2});
                    reject(error);
            });
        });
    }


    componentDidMount() {
        this.getTypeData();
    }

    renderLoadingView() {
        let  isLoadText = "正在加载数据......";
        if (this.state.isLoad==2)
            isLoadText = "数据加载失败......";
        return (
            <View >
                <Text h1>
                    {isLoadText}
                </Text>
                <Button title="重新加载" onPress={()=>{this.getTypeData('http://10.10.110.18:8001/xcbx/mobile/getBaseData')}}/>
            </View>
        );
    }
    renderData(typeDatas) {

        return (
            <ThemeProvider theme={appTheme}>
            <ScrollView
                automaticallyAdjustContentInsets={false}
                horizontal={false}
                contentContainerStyle={styles.no_data}
                style={styles.base}
            >
                {
                    typeDatas.map((item, i) => {
                        console.log(item.name);
                        return (
                            <ListItem
                                key={i}
                                leftAvatar={{source: {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}}
                                title={item.name}
                                subtitle={item.code}
                            />
                        );
                    })
                }
                <Button title="get Data" onPress={()=>{this.getTypeData()}}/>
            </ScrollView>
            </ThemeProvider>
        );
    }
    render() {
        console.log("---------------------render --------------------------------");
        if (this.state.isLoad!=1) {
            return this.renderLoadingView();
        }
        var typeDatas = this.state.typeData;
        return this.renderData(typeDatas);
    }
}

export default NormalDynamic;
const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    gridLayout: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
})
