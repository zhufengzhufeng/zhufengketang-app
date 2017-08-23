//home里放的就是首页所有的信息
import * as Types from '../action-types';
let initState = {
    currentLesson:0,
};
export default function (state=initState,action) {
    switch (action.type){
        case Types.SET_CURRENT_LESSON:
            return {...state,currentLesson:action.val}
    }
    return state;
}