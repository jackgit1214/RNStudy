import React from 'react';
import {Text, ThemeProvider} from "react-native-elements";
import appTheme from "./theme";
import {createDrawerNavigator, DrawerItems} from "react-navigation";
import bottomMainContainer from './bottomMainContainer'
import {ScrollView, View} from "react-native";
import components from './staticPages/components';
import components1 from './staticPages/drawer/components'
import login from './staticPages/drawer/login'
import list from './staticPages/drawer/lists'
import ratings from './staticPages/drawer/ratings'
import profile from './staticPages/drawer/profile'
import setting from './staticPages/drawer/settings'
import pricing from './staticPages/drawer/pricing'
import popmenu from './staticPages/drawer/popmenu'

const LeftDrawerNavigator = createDrawerNavigator({
    Login: {
        screen: login,
    },
    bottomStack:{
        screen:bottomMainContainer,
    },
    components:{
        screen:components1,
    },
    List: {
        screen: list,
    },
    Profile:{
        screen:profile,
    },
    Setting:{
        screen:setting,
    },
    Ratings:{
        screen:ratings,
    },
    Pricing:{
        screen:pricing,
    },
    Popmenu:{
        screen:popmenu
    }
}, {
    initialRouteName: 'components', // 默认页面组件
    order: ['bottomStack', 'List', 'Profile','components','Setting','Ratings','Login','Pricing','Popmenu'],//routeNames数组，用于定义抽屉项目的顺序。
    drawerWidth: 200, // 抽屉宽
    drawerType:'slide',//front ,black,slide
    drawerLockMode: 'unlocked',//设置是否响应手势
    //'unlocked'   可以通过手势和代码 打开关闭抽屉
    //'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
    //'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现
    drawerPosition: 'left', // 抽屉在左边还是右边
    useNativeAnimations: false, //启用原生动画。默认是true。
    drawerBackgroundColor: 'pink', //使用抽屉背景获取某种颜色。默认是white。
    contentOptions: {

        activeItemKey: 'Notifications',
        labelStyle: {//标签样式 Text当标签是字符串时，样式对象在内容部分内覆盖样式
             color : 'red',
            height: 30,
        },
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式
            marginVertical: 0,
        },
        //没有作用
        onItemPress: (route) => {
            console.log('-------->' + JSON.stringify(route))
        },
        itemsContainerStyle: 'color:red',//内容部分的样式对象

        // itemStyle: '', //单个项目的样式对象，可以包含图标和 / 或标签
        // activeLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖活动标签的样式
        // inactiveLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖非活动标签的样式
        // iconContainerStyle: '', //样式对象以覆盖View图标容器样式。
    },
    contentComponent: props => { // 自定义抽屉组件
        return (
            <ScrollView>
                <View >
                    <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#000'}}>
                        <Text style={{color: '#FFF'}} >可用组件列表</Text>
                    </View>
                    <DrawerItems {...props} />
                </View>
            </ScrollView>
        )
    }

});

export  default LeftDrawerNavigator;
