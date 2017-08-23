import * as Types from '../action-types';
import {getSliders} from '../../api/home'
//actionCreators 构建action对象的 他是一个function


export const setCurrentLesson = (val) => {
    return {
        type:Types.SET_CURRENT_LESSON,
        val
    }
};
//如果使用 reduxThunk actionCreator 可以返回一个函数 函数中有dispatch参数
export const getSlider = () => (dispatch) =>{
    getSliders().then(sliders=>{
        dispatch({
            type:Types.GET_SLIDERS,
            sliders
        });
    });
};