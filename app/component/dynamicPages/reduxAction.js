export function addTypeData() {
    return {
        type: 'ADD'//types.REQUEST_TYPE_LIST
    };
}

export function getTypeDatas() {
    console.log("---------------Action----------------------")
    return {
        type: 'GET_DATA'
    };
}

export function exec_increment(){
    console.log("---------------Action------------exec_increment----------")
    return {
        type:'INCREMENT'
    }
}

export function getDataBySagas() {
    console.log("---------------Action------------GET_DATA_BY_SAGAS----------")
    return {
        type: 'GET_DATA_BY_SAGAS'
    };
}

export function getDatabaseData(dataTypes) {
    console.log("---------------Action------------getDatabaseData----------")
     return {
        type: 'GET_DATABASE_DATA',
         dataTypes
    };
}

export function receiveDataTypes(dataTypes) {
    console.log("------------------refresh data---------------------")
    return {
        type: 'REFRESH_DATA',//''types.RECEIVE_TYPE_LIST,
        dataTypes
    };
}


