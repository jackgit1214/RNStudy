import React from 'react';
import {createStackNavigator} from 'react-navigation';
import MainHeader from "../../mainHeader";
import ButtonsHome from '../views/buttons_home';
import ButtonsDetails from '../views/buttons_detail';

const ButtonsTabView = ({navigation}) => (
    <ButtonsHome navigation={navigation}/>
);

const ButtonsDetailTabView = ({navigation}) => (
    <ButtonsDetails
        banner={`${navigation.state.params.name}s Profile`}
        data_Param={'这是测试数据，是否能通过'} //可用于传递数据
        navigation={navigation}
    />
);

const ButtonsTab = createStackNavigator({
    Buttons: {
        screen: ButtonsTabView,
        path: '/buttontab',
        navigationOptions: ({navigation}) => ({
            title: 'Buttons',
            header: (
                <MainHeader navigation={navigation}/>
            ),
        }),
    },
    Button_Detail: {
        screen: ButtonsDetailTabView,
        path: '/buttons_detail',
        navigationOptions: ({navigation}) => ({
            title: 'Buttons Detail',
            header: (
                <MainHeader navigation={navigation}/>
            ),
        }),

    },
});

export default ButtonsTab;
