import * as Types from '../action-types';
import {getSliders,getLessons} from '../../api/home'
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

export const getLesson = () => (dispatch,getState) =>{
    //从redux 取出 limit type offset  getState = store.getState
    let {currentLesson,lesson:{hasMore,limit,offset}} = getState().home;
    if(!hasMore)return;//没有就不要获取
    //将isLoading状态改成true
    getLessons(currentLesson,offset,limit).then(lesson=>{
        dispatch({
            type:Types.GET_LESSONS,
            ...lesson
            /*lessons:lesson.lessons,
            hasMore:lesson.hasMore*/
        })
    });
};