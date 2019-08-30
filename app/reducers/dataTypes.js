

const initialTypeState = {
    loading: false,
    typeList: [],
    testValue:0
};

const dataTypes = (state = initialTypeState, action) => {
    switch (action.type) {
        case 'ADD':{
            let newDatas = state.typeList;
            newDatas.push({name:'test',code:'test01'});
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'GET_DATA':{
            let newDatas = [{name: 'redux_1', code: 'test1'}, {name: 'redux_2', code: 'test2'}];
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        case 'GET_DATABASE_DATA':{
            let newDatas = action.dataTypes;
            return Object.assign({},state,{loadading:true,typeList:newDatas});
        }
        case 'REFRESH_DATA':{
            let newDatas = action.dataTypes;
            console.log(newDatas);
            return Object.assign({},state,{loading:true,typeList:newDatas});
        }
        default:
            return state;
    }
}

export default dataTypes;
