import {post ,get} from './index';

let url = 'http://localhost:3000';
//注册接口
export const regs = (userInfo) =>{
    return post(url+'/reg',userInfo)
};

//验证是否登录
export const auths = () =>{
    return get(url+'/auth');
};