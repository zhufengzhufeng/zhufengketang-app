import {get} from './index';
//所有的接口的方法都加s
//最终 我们调用的是getSliders的方法
let url = 'http://localhost:3000';
//获取轮播图
export const getSliders = () =>{
    return get( url+'/slider');
};