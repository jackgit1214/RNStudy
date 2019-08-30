import {takeEvery, put, take, call, fork } from 'redux-saga/effects'
import RequestUtil from '../utils/RequestUtil';
import {receiveDataTypes} from '../component/dynamicPages/reduxAction'
export function* watchRequestTypeList() {
    console.log('------------------watchRequestTypeList-----------------------')
    console.log("---------------------------3------------------------------")
    //while ((true)){
        yield takeEvery("GET_DATA_BY_SAGAS",getData)
    //}

    // while (true) {
    //     console.log("-----------------------1---------------------------")
    //     yield take("GET_DATA_BY_SAGAS");
    //     console.log("----------------------2---------------------------")
    //     yield fork(getData);
    // }
}
function* getData(){
    console.log('------sagas------------执行get_data-----------------------')
    const typeList = yield call(RequestUtil.request, 'mobile/getBaseData', 'post','type=1');
    yield put(receiveDataTypes(typeList));
}
function* func(){
    console.log('------------------执行func-----------------------')
}
