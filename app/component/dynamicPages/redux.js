import React from "react";
import {Button, Icon, ListItem, ThemeProvider} from "react-native-elements";
import appTheme from "../theme";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as reduxAction from './reduxAction';
import {exec_increment} from './reduxAction';
import {ScrollView,View,Text} from "react-native";
import PropTypes from 'prop-types'
import testData from "../../reducers/testReducers";

// const propTypes = {
//     TypeDatas: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     toggleTodo: PropTypes.func.isRequired
// }

const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }) => (
    <View>
        <Text>Clicked: {value} times</Text>
        <Button onPress={onIncrement} title={'+'} />
        <Button onPress={onDecrement} title={'-'} />
        <Button onPress={onIncrementIfOdd} title={'Increment if odd'}></Button>
        <Button onPress={onIncrementAsync} title={'Increment async'}></Button>
    </View>
)

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired,
    onIncrementIfOdd: PropTypes.func.isRequired,
}


class ReduxWay extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'redux',
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                size={30}
                type="material-community"
                color={tintColor}
            />
        ),
    };

    constructor(props) {
        super(props);
        //let test  = this.context.store
        console.log("-------------------------constructor---------------------------")
       // console.log(test);
    }

    _addData() {
        const {reduxActions} = this.props;
        reduxActions.addTypeData();
    }

    _reloadData() {
        const {reduxActions} = this.props;
        reduxActions.getTypeDatas();
    }
    _sagasData(){
        const {reduxActions} = this.props;
        reduxActions.getDataBySagas();
    }
    _reloadDatabaseData() {
        const {reduxActions} = this.props;

        let url = 'http://10.10.110.18:8001/xcbx/mobile/getBaseData';
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
                reduxActions.getDatabaseData(responseData.data);
            }).catch((error) => {
                //this.setState({isLoad:2});
                reject(error);
            });
        });
    };
    componentDidMount() {
        console.log("================componentDidMount===========================")
        const {reduxActions} = this.props;
        reduxActions.getTypeDatas();
    }

    render() {
        const {dataTypes} = this.props;
        const {testData} = this.props;
         const {reduxActions} = this.props;
        const {dispatch} = this.props;
        console.log("-----------------render---------------------")
        return (
            <ThemeProvider theme={appTheme}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    horizontal={false}
                >
                    {
                        dataTypes.typeList.map((item, i) => {
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
                    <View style={{flexDirection: 'row'}}>
                        <Button title="add Data" onPress={() => {
                            this._addData()
                        }}/>
                        <Button title="reload Data" onPress={() => {
                            this._reloadData()
                        }}/>
                        <Button title="reload DB Data" onPress={() => {
                            this._reloadDatabaseData()
                        }}/>


                    </View>
                    <Button title="Sagas DB Data" onPress={() => {
                        this._sagasData()
                    }}/>
                    <Button title="test" onPress={() => {
                        //reduxActions.exec_increment();
                        dispatch(exec_increment());
                    }}/>
                    <Counter
                        value={testData.testOther}
                        onIncrement={() => dispatch({type:'INCREMENT'})}
                        onDecrement={() => dispatch({type:'DECREMENT'})}
                        onIncrementIfOdd={() => dispatch({type:'INCREMENT_IF_ODD'})}
                        onIncrementAsync={() => dispatch({type:'INCREMENT_ASYNC'})}
                    />
                </ScrollView>

            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataTypes:state.data,
        testData:state.test,
    };
}

const mapDispatchToProps = dispatch => {

    const reduxActions = bindActionCreators(reduxAction, dispatch);
    return {
        reduxActions,
        dispatch,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxWay)

//export default ReduxWay;
