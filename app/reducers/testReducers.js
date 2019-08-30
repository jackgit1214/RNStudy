

const initialTypeState = {
    loading: false,
    testList: [],
    testOther:1,
};

const testData = (state = initialTypeState, action) => {
    console.log("------------------testReducers--------------------")
    switch (action.type) {
        case 'Test_ADD':{
            console.log("------------------testReducers------add--------------")
            let newDatas = state.typeList;
            newDatas.push({name:'test',code:'test01'});
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'Test_GET_DATA':{
            console.log("------------------testReducers------GET_DATA--------------")
            let newDatas = [{name: 'redux_1', code: 'test01'}, {name: 'redux_2', code: 'test2'}];
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'Test_GET_DATABASE_DATA':{
            console.log("------------------testReducers------GET_DATABASE_DATA--------------")
            let newDatas = action.dataTypes;
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'Test_REFRESH_DATA':{
            console.log("------------------testReducers------REFRESH_DATA--------------")
            let newDatas = action.dataTypes;
            console.log(newDatas);
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'INCREMENT':{
            console.log("------------------testReducers------INCREMENT--------------")
            let newValue = state.testOther;
            newValue = newValue+1;
            return Object.assign({},state,{testOther:newValue})
        }

        case 'DECREMENT': {
            let newValue = state.testOther;
            newValue = newValue - 1;
            return Object.assign({}, state, {testOther: newValue})
        }
        default:
            console.log("------------------testReducers------default--------------")

            return state;
    }
}
export default testData;
