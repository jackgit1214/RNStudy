import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import rootSaga from './sagas/index';

import configureStore from './store/configure-store';
import drawerNavigator from './component/drawerNavigation'

const AppContainer = createAppContainer(drawerNavigator);
//const AppContainer = createAppContainer(bottomTabNavigator,drawerNavigation);
const store = configureStore();

// run root saga
store.runSaga(rootSaga);

const RootApp = () => (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
);
export default RootApp;
