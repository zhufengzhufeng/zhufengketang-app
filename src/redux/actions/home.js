import * as Types from '../action-types';

//actionCreators 构建action对象的 他是一个function


export const setCurrentLesson = (val) => {
    return {
        type:Types.SET_CURRENT_LESSON,
        val
    }
};
