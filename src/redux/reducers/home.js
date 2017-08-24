//home里放的就是首页所有的信息
import * as Types from '../action-types';
let initState = {
    currentLesson:0,
    sliders:[],//轮播图的数据
    lesson:{ //滚动到底部刷新
        lessonList:[],
        hasMore:true, //是否有更多
        limit:5, //每次想要5条
        offset:0,//偏移量
        isLoading:false //状态表示是否正在加载
    }
};
export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {
                ...state,currentLesson:action.val,
                lesson:{
                    ...state.lesson,
                    lessonList:[],
                    offset:0
                }
            };
        case Types.GET_SLIDERS:
            return {...state,sliders:action.sliders}
        case Types.GET_LESSONS:
            return {
                ...state,
                lesson:{
                    ...state.lesson,
                    hasMore:action.hasMore,
                    lessonList:[...state.lesson.lessonList,...action.lessons],
                    offset:state.lesson.offset+action.lessons.length,
                    isLoading:false
                }
            };
        case Types.SET_LOADING_STATUS:
            return {
                ...state,
                lesson:{
                    ...state.lesson,
                    isLoading:true
                }
            }
    }
    return state;
}