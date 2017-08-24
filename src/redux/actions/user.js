
import {regs} from '../../api/user';
import * as Types from '../action-types'
export const reg = (userInfo) => (dispatch)=>{
    regs(userInfo).then(data=>{
        console.log(data);
        if(data.err){
            dispatch({
                type:Types.SET_ERROR,
                err:data.err
            })
        }else{
            dispatch({
                type:Types.SET_USER_INFO,
                userInfo:data,
            })
        }
    })
};