let initState = {
    userInfo:{}, //用户的信息
    err:'' //登录注册的错误信息
};
import * as Types from '../action-types';
export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_ERROR:
            return {...state,err:action.err};
        case Types.SET_USER_INFO:
            return {...state,userInfo:action.userInfo,err:''}
    }
    return state;
}